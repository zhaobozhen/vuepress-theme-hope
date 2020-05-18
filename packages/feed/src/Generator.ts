import { Context, Page } from 'vuepress-types';
import { Feed } from 'feed';
import { FeedOptions } from '../types';
import FeedPage from './Page';
import chalk = require('chalk');
import { fs } from '@vuepress/shared-utils';
import path = require('path');

class Generator {
  /** feed 生成器 */
  feed: Feed;

  constructor(
    private pages: Page[],
    private options: FeedOptions,
    private context: Context
  ) {
    this.feed = new Feed(options.feed);
  }

  async add(): Promise<void> {
    console.log(chalk.cyan('wait'), 'Generating Feed...');

    const pages = this.options.sort(this.pages).slice(0, this.options.count);

    const out = [];

    for (const page of pages) {
      const item = await new FeedPage(
        page,
        this.options,
        this.context
      ).get_feed_item();

      if (!_.isEmpty(item)) {
        this.feed.addItem(item);

        out.push(item);
      }
    }

    if (!_.isEmpty(out))
      LIB.LOG.success(
        `added ${CHALK.cyan(`${out.length} page(s)`)} as feed item(s)`
      );

    return out;
  }

  public addCategory(): void {
    const { category } = this.options;

    if (category) {
      const categories = Array.isArray(category) ? category : [category];

      categories.map((e) => this.feed.addCategory(e));
    }
  }

  public addContributors(): void {
    const { contributor } = this.options;

    if (contributor) {
      const contributors = Array.isArray(contributor)
        ? contributor
        : [contributor];

      contributors.map((e) => this.feed.addContributor(e));
    }
  }

  async generateFiles() {
    LIB.LOG.wait('Checking feeds that need to be generated...');

    if (_.isEmpty(this.feeds)) {
      LIB.LOG.warn('no feeds set - aborting');

      return;
    }

    // -----------------------------------------------------------------------

    const { outDir, cwd } = this.context;

    const { feeds } = this;
    const out = [];

    for (const key of Object.keys(feeds)) {
      if (!this._internal.allowed_feed_types.includes(key)) continue;

      // ---------------------------------------------------------------------

      const feed = feeds[key];

      if (!feed.enable || !feed.file_name) continue;

      // ---------------------------------------------------------------------

      const content = this.feed[key]();
      const file = path.resolve(outDir, feed.file_name);
      const relative = path.relative(cwd, file);

      await fs.outputFile(file, content);

      LIB.LOG.success(
        `${key} feed file generated and saved to ${CHALK.cyan(relative)}`
      );

      // ---------------------------------------------------------------------

      out.push(file);
    }

    // -----------------------------------------------------------------------

    return out;
  }

  /**
   * @return {array}
   */
  async generate() {
    await this.add();

    this.addCategory();

    this.addContributors();

    const files = await this.generateFiles();

    return files;
  }
}

export default Generator;
