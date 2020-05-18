import { Context, Page, PluginOptionAPI } from 'vuepress-types';
import { FeedOptions } from '../types';

const getOption = (context: Context) => {
  const { title, description } = context.getSiteData();

  /*
   * Feed class options
   * @see: https://github.com/jpmonette/feed#example
   */

  const options = {
    title,
    description,
    generator: PLUGIN.homepage

    /*
     * the following are auto populated in PLUGIN.get_options()
     * if they are not set as options
     *id,
     *link,
     *feedLinks,
     */

    // ref:
    /*
     *title: "Feed Title",
     *description: "This is my personal feed!",
     *id: "http://example.com/",
     *link: "http://example.com/",
     *image: "http://example.com/image.png",
     *favicon: "http://example.com/favicon.ico",
     *copyright: "All rights reserved 2013, John Doe",
     *updated: new Date(2013, 6, 14), // optional, default = today
     *generator: "awesome", // optional, default = 'Feed for Node.js'
     *feedLinks: {
     *	json: "https://example.com/json",
     *	atom: "https://example.com/atom"
     *},
     *author: {
     *	name: "John Doe",
     *	email: "johndoe@example.com",
     *	link: "https://example.com/johndoe"
     *}
     */
  };

  const out = {
    // required; it can also be used as enable/disable

    canonical_base: '',

    // -------------------------------------------------------------------------

    // Feed class options

    feed_options: options,

    // -------------------------------------------------------------------------

    /*
     * @notes:
     * property name is also the name of the FEED package function
     */

    feeds: {
      rss2: {
        enable: true,
        file_name: 'rss.xml',
        head_link: {
          enable: true,
          type: 'application/rss+xml',
          title: '%%site_title%% RSS Feed'
        }
      },

      // -----------------------------------------------------------------------

      atom1: {
        enable: true,
        file_name: 'feed.atom',
        head_link: {
          enable: true,
          type: 'application/atom+xml',
          title: '%%site_title%% Atom Feed'
        }
      },

      // -----------------------------------------------------------------------

      json1: {
        enable: true,
        file_name: 'feed.json',
        head_link: {
          enable: true,
          type: 'application/json',
          title: '%%site_title%% JSON Feed'
        }
      }
    },

    // -------------------------------------------------------------------------

    /*
     * order of what gets the highest priority:
     *
     * 1. frontmatter
     * 2. page excerpt
     * 3. content markdown paragraph
     * 4. content regular html <p>
     */

    description_sources: [
      'frontmatter',
      'excerpt',

      /*
       * markdown paragraph regex
       * @todo: needs work
       *
       */
      /^((?:(?!^#)(?!^-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/gimu,

      // html paragraph regex
      /<p(?:.*?)>(.*?)<\/p>/i

      // -----------------------------------------------------------------------

      // @notes: setting as array require escaping `\`

      /*
       * ['^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n', 'gim'],
       * ['<p(?:.*?)>(.*?)<\/p>', 'i'],
       */
    ],

    // -------------------------------------------------------------------------

    // @consider description max words/char

    // -------------------------------------------------------------------------

    /*
     * order of what gets the highest priority:
     *
     * 1. frontmatter
     * 2. content markdown image such as `![alt text](http://url)`
     * 3. content regular html img
     */

    image_sources: [
      'frontmatter',

      /!\[.*?\]\((.*?)\)/iu, // markdown image regex
      /<img.*?src=['"](.*?)['"]/iu // html image regex

      // -----------------------------------------------------------------------

      // @notes: setting as array require escaping `\`

      /*
       * ['!\[.*?\]\((.*?)\)', 'i'],
       * ['<img.*?src=[\'"](.*?)[\'"]', 'i'],
       */
    ],

    // -------------------------------------------------------------------------

    /*
     * pages in current directories will be auto added as feed
     * unless they are disabled using their frontmatter
     * this option is used by the default is_feed_page function
     */

    posts_directories: ['/blog/', '/_posts/'],

    // -------------------------------------------------------------------------

    // function to check if the page is to be used in a feed item

    is_feed_page: PLUGIN.is_feed_page, // function

    // -------------------------------------------------------------------------

    count: 20,

    /*
     * optional sorting function for the entries.
     * Gets the array entries as the input, expects the sorted array
     * as its output.
     * e.g.:	 sort:	entries => _.reverse( _.sortBy( entries, 'date' ) ),
     */
    sort: (entries) => entries // defaults to just returning it as it is

    // -------------------------------------------------------------------------

    // supported - use in config as needed

    /*
     * category
     * contributor
     */
  };

  // ---------------------------------------------------------------------------

  return out;
};

const getOption = (plugin_options, context) => {
  if (_.isEmpty(PLUGIN.options)) {
    PLUGIN.options = _.defaultsDeep(
      plugin_options,
      PLUGIN.get_options_defaults(context)
    );

    // -------------------------------------------------------------------------

    // default link and id

    if (!PLUGIN.options.feed_options.hasOwnProperty('link'))
      PLUGIN.options.feed_options.link = plugin_options.canonical_base;

    if (!PLUGIN.options.feed_options.hasOwnProperty('id'))
      PLUGIN.options.feed_options.id = plugin_options.canonical_base;

    // -------------------------------------------------------------------------

    // default feedLinks

    if (
      !PLUGIN.options.feed_options.hasOwnProperty('feedLinks') &&
      !_.isEmpty(PLUGIN.options.feeds)
    ) {
      PLUGIN.options.feed_options.feedLinks = {};

      const feeds = PLUGIN.options.feeds || {};

      for (let key of Object.keys(feeds)) {
        if (!PLUGIN.allowed_feed_types.includes(key)) continue;

        // ---------------------------------------------------------------------

        const url = PLUGIN.get_feed_url(feeds[key]);

        if (!url) continue;

        // ---------------------------------------------------------------------

        key = key.replace(/[0-9]/gu, ''); // remove numbers from key;

        PLUGIN.options.feed_options.feedLinks[key] = url;
      }
    }

    // -------------------------------------------------------------------------

    // internal - used in other files/classes

    PLUGIN.options._internal = {
      name: PLUGIN.name,
      homepage: PLUGIN.homepage,
      key: PLUGIN.key,
      allowed_feed_types: PLUGIN.allowed_feed_types
    };
  }

  // ---------------------------------------------------------------------------

  return PLUGIN.options;
};
// PLUGIN.get_options()

const ready = (plugin_options, context) => {
  const options = PLUGIN.get_options(plugin_options, context);

  // ---------------------------------------------------------------------------

  return options.domain && options.feeds;
};
// PLUGIN.good_to_go()

/**
 * @return {string}
 */
PLUGIN.get_feed_url = (feed) => {
  if (feed.enable && feed.file_name)
    return UTIL.resolve_url(PLUGIN.options.canonical_base, feed.file_name);
};
// PLUGIN.get_feed_url()

/**
 * @return {bool}
 */
PLUGIN.get_page_feed_settings = (frontmatter) => frontmatter.feed || {};

const isArticle = (frontmatter): boolean => frontmatter.article !== false;

const isFeed = (page: Page): boolean => {
  const { frontmatter, path } = page;

  // ---------------------------------------------------------------------------

  if (!_.isEmpty(frontmatter)) {
    /*
     * use `frontmatter.feed.enable` to exclude a particular page/post
     * bailout if it is set to false
     */

    const page_feed_settings = frontmatter.feed || {};

    /*
     *if ( 		page_feed_settings.hasOwnProperty('enable')
     *		 && ! page_feed_settings.enable )
     *{
     *	return false;
     *}
     */

    /*
     * @notes:
     * as opposed to the above way of bailing out if set to false
     * the following means that any page that has `frontmatter.feed.enable`
     * set to true will be added
     */

    if (page_feed_settings.hasOwnProperty('enable'))
      return page_feed_settings.enable;

    // -------------------------------------------------------------------------

    if (PLUGIN.is_page_type_post(frontmatter)) return true;
  }

  // ---------------------------------------------------------------------------

  const directories = PLUGIN.options.posts_directories || [];

  if (!_.isEmpty(directories))
    for (const dir of directories) if (path.startsWith(`${dir}`)) return true;

  // ---------------------------------------------------------------------------

  return false;
};

export = (options: FeedOptions, context: Context): PluginOptionAPI => ({
  /**
   * store $page._strippedContent
   */
  extendPageData($page): void {
    if (getOptions(options, context).is_feed_page($page))
      PLUGIN.pages.push($page);
  },

  /**
   * used for adding head links
   */
  async ready(): Promise<void> {
    if (PLUGIN.good_to_go(options, context))
      await new LIB.Head(PLUGIN.options, context).add_links();
  },

  /**
   * used for generating the feed files
   */
  async generated(): Promise<void> {
    const siteData = context.getSiteData();

    if (PLUGIN.good_to_go(options, context))
      await new LIB.Generator(PLUGIN.pages, PLUGIN.options, context).generate();
  }
});
