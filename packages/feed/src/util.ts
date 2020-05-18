import removeMarkdown from './remove-markdown';
import striptags from './striptags';

export const resolveUrl = (
  domain: string,
  base: string,
  path: string
): string =>
  `${
    // make sure domain does not end with '/'
    domain.replace(/\/$/u, '')
  }${
    // make sure base starts and ends with '/'
    base.replace(/^\/?/u, '/').replace(/\/?$/u, '/')
  }${
    // make sure path does not start with '/'
    path.replace(/^\//u, '')
  }`;

export const stripMarkdown = (str: string): string =>
  striptags(removeMarkdown(str, { useImgAltText: false }));

// export const getReg = (re: RegExp[]) =>
//   Array.isArray(re) ? new RegExp(...re) : re;

/**
 * check if string is a valid url
 */
export const isUrl = (test: string): boolean => {
  if (!test || typeof test !== 'string') return false;

  const URL_REG = /^(?:\w+:)?\/\/(\S+)$/u;

  const match = test.match(URL_REG);

  if (!match) return false;

  const address = match[1];

  if (!address) return false;

  const LOCALHOST_REG = /^localhost[:?\d]*(?:[^:?\d]\S*)?$/u;
  const NONELOCALHOST_REG = /^[^\s.]+\.\S{2,}$/u;

  return LOCALHOST_REG.test(address) || NONELOCALHOST_REG.test(address);
};
