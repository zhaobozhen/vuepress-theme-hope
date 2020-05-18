const STATE_PLAINTEXT = Symbol('plaintext');
const STATE_HTML = Symbol('html');
const STATE_COMMENT = Symbol('comment');

const ALLOWED_TAGS_REGEX = /<(\w*)>/gu;
const NORMALIZE_TAG_REGEX = /<\/?([^\s/>]+)/u;

export interface StripTagsOption {
  allowableTags: Set<string>;
  tagReplacement: string;
  state: symbol;
  tagBuffer: string;
  depth: number;
  inQuoteChar: string;
}

const normalizeTag = (tagBuffer: string): string => {
  const match = NORMALIZE_TAG_REGEX.exec(tagBuffer);

  return match ? match[1].toLowerCase() : '';
};

const parseAllowableTags = (allowableTags: string | string[]): Set<string> => {
  let tagSet = new Set<string>();

  if (typeof allowableTags === 'string') {
    let match;

    while ((match = ALLOWED_TAGS_REGEX.exec(allowableTags)))
      tagSet.add(match[1]);
  } else tagSet = new Set(allowableTags);

  return tagSet;
};

// eslint-disable-next-line max-lines-per-function
const striptagsInternal = (html: string, option: StripTagsOption): string => {
  const { allowableTags, tagReplacement } = option;
  let { depth, inQuoteChar, state, tagBuffer } = option;
  let output = '';

  for (let idx = 0; idx < html.length; idx++) {
    const char = html[idx];

    if (state === STATE_PLAINTEXT)
      switch (char) {
        case '<':
          state = STATE_HTML;
          tagBuffer += char;
          break;

        default:
          output += char;
          break;
      }
    else if (state === STATE_HTML)
      switch (char) {
        case '<':
          // ignore '<' if inside a quote
          if (inQuoteChar) break;

          // we're seeing a nested '<'
          depth += 1;
          break;

        case '>':
          // ignore '>' if inside a quote
          if (inQuoteChar) break;

          // something like this is happening: '<<>>'
          if (depth) {
            depth -= 1;

            break;
          }

          // this is closing the tag in tag_buffer
          inQuoteChar = '';
          state = STATE_PLAINTEXT;
          tagBuffer += '>';

          if (allowableTags.has(normalizeTag(tagBuffer))) output += tagBuffer;
          else output += tagReplacement;

          tagBuffer = '';
          break;

        case '"':
        case "'":
          // catch both single and double quotes

          if (char === inQuoteChar) inQuoteChar = '';
          else inQuoteChar = inQuoteChar || char;

          tagBuffer += char;
          break;

        case '-':
          if (tagBuffer === '<!-') state = STATE_COMMENT;

          tagBuffer += char;
          break;

        case ' ':
        case '\n':
          if (tagBuffer === '<') {
            state = STATE_PLAINTEXT;
            output += '< ';
            tagBuffer = '';

            break;
          }

          tagBuffer += char;
          break;

        default:
          tagBuffer += char;
          break;
      }
    else if (state === STATE_COMMENT)
      switch (char) {
        case '>':
          if (tagBuffer.slice(-2) === '--')
            // close the comment
            state = STATE_PLAINTEXT;

          tagBuffer = '';
          break;

        default:
          tagBuffer += char;
          break;
      }
  }

  // save the context for future iterations
  option.state = state;
  option.tagBuffer = tagBuffer;
  option.depth = depth;
  option.inQuoteChar = inQuoteChar;

  return output;
};

const initOptions = (
  allowableTags: string | string[],
  tagReplacement: string
): StripTagsOption => ({
  allowableTags: parseAllowableTags(allowableTags),
  tagReplacement,
  state: STATE_PLAINTEXT,
  tagBuffer: '',
  depth: 0,
  inQuoteChar: ''
});

const striptags = (
  html = '',
  allowableTags: string | string[] = [],
  tagReplacement = ''
): string =>
  striptagsInternal(html, initOptions(allowableTags, tagReplacement));

export const streamingMode = (
  allowableTags: string | string[] = [],
  tagReplacement = ''
): ((html: string) => string) => {
  const options = initOptions(allowableTags, tagReplacement);
  return (html = ''): string => striptagsInternal(html, options);
};

export default striptags;
