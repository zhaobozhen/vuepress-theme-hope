import chalk = require('chalk');
import { Context } from 'vuepress-types';
import { FeedOptions } from '../types';

/**
 * Class responsible for adding links to head
 */
class Head {
  /**
   * constructor
   *
   * @param {object} options
   * @param {object} context
   */
  constructor(private options: FeedOptions, private context: Context) {}

  get_feed_url(feed) {
    if (feed.head_link.enable && feed.enable && feed.file_name)
      return LIB.UTIL.resolve_url(this.canonical_base, feed.file_name);
  }

  /**
   * @return {array}
   */
  get_link_item(feed, site_title = '') {
    const href = this.get_feed_url(feed);

    if (!href) return;

    // -----------------------------------------------------------------------

    const { type, title } = feed.head_link;

    return [
      'link',
      {
        rel: 'alternate',
        type,
        href,
        title: title.replace('%%site_title%%', site_title)
      }
    ];
  }

  /**
   * @return {array|undefined}
   */
  async add_links() {
    if (_.isEmpty(this.feeds)) return;

    const { siteConfig = {} } = this.context;

    siteConfig.head = siteConfig.head || [];
    const site_title = siteConfig.title || '';

    const out = [];

    for (const key of Object.keys(this.feeds)) {
      if (!this._internal.allowed_feed_types.includes(key)) continue;

      // ---------------------------------------------------------------------

      const item = this.get_link_item(this.feeds[key], site_title);

      if (_.isEmpty(item)) continue;

      siteConfig.head.push(item);

      LIB.LOG.success(`${key} link added to ${CHALK.cyan('siteConfig.head')}`);

      out.push(item);
    }

    return out;
  }
}

export default Head;
