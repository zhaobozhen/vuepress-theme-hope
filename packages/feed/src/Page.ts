import {
  Context,
  Page,
  PageComputed,
  PageFrontmatter,
} from "@mr-hope/vuepress-types";
import { isUrl, resolveUrl } from "./util";
import { FeedOptions } from "../types";

class FeedPage {
  private frontmatter: PageFrontmatter;

  private feedOption: Record<string, any>;

  constructor(
    private $page: PageComputed,
    private options: FeedOptions,
    private context: Context
  ) {
    this.frontmatter = $page.frontmatter;
    this.feedOption = this.frontmatter.feed || {};
  }

  private get page(): Page | undefined {
    return this.context.pages.find((page) => page.key === this.$page.key);
  }

  /** real url */
  public get url(): string {
    return resolveUrl(this.options.domain, this.context.base, this.$page.path);
  }

  public get title(): string {
    return (this.feedOption.title as string) || this.$page.title;
  }

  public get date(): Date {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { date, time = date } = this.$page.frontmatter;

    return time && time instanceof Date
      ? time
      : new Date(this.$page.lastUpdatedTime);
  }

  public get description(): string {
    if (this.frontmatter.description) return this.frontmatter.description;

    if (this.$page.excerpt)
      return this.context.markdown.render(this.$page.excerpt).html || "";

    return "";
  }

  public get content(): string {
    if (this.feedOption.content) return this.feedOption.content;

    // eslint-disable-next-line no-underscore-dangle
    const { html } = this.context.markdown.render(this.page._strippedContent);

    return html || "";
  }

  public get image(): string {
    if (!out) return;

    // image url as relative path is supported

    return isUrl(out) ? out : resolveUrl(out);
  }

  public get author(): string {
    const { author } = this.$page.frontmatter;
    const { author: globalAuthor } = this.context.themeConfig;
    return author === false ? "" : author || globalAuthor;
  }

  public get contributor(): any[] {
    return this.feedOption.contributor || [];
  }

  async get_feed_item() {
    // we need at least title or description

    const { title } = this;
    const { description } = this;

    if (!title && !description) return;

    const { url } = this;
    const out = {
      title,
      description,
      id: url, // @notes: i considered using key, but url is more relevant
      link: url,
      date: this.date,
      image: this.image,

      /*
       * @todo:
       * all content is included in item
       * still a wip; needs rendering all vue related syntax
       */

      // content: this.content,

      // @notes: the following are handled below

      /*
       *author			: [],
       *contributor	: [],
       */
    };

    const keys = ["author", "contributor"];

    for (const key of keys) {
      const res = this[key];

      if (!_.isEmpty(res)) out[key] = Array.isArray(res) ? res : [res];
    }

    return out;
  }
}

export default FeedPage;
