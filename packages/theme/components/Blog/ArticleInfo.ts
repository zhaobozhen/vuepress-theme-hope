import { PropType, computed, defineComponent } from "@vue/composition-api";
import { capitalize, i18n } from "@mr-hope/vuepress-shared-utils";

import AuthorIcon from "@mr-hope/vuepress-shared-utils/icons/AuthorIcon.vue";
import CalendarIcon from "@mr-hope/vuepress-shared-utils/icons/CalendarIcon.vue";
import CategoryInfo from "@mr-hope/vuepress-plugin-comment/src/CategoryInfo.vue";
import TagInfo from "@mr-hope/vuepress-plugin-comment/src/TagInfo.vue";
import TimeIcon from "@mr-hope/vuepress-shared-utils/icons/TimeIcon.vue";

import { PageComputed } from "@mr-hope/vuepress-types";

export default defineComponent({
  name: "ArticleInfo",

  components: {
    AuthorIcon,
    CalendarIcon,
    CategoryInfo,
    TagInfo,
    TimeIcon,
  },

  props: {
    article: {
      type: Object as PropType<PageComputed>,
      required: true,
    },
  },

  setup(props) {
    /** 发表时间 */
    const time = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { date, time = date } = props.article.frontmatter;

      if (typeof time === "string") {
        if (time.indexOf("T") !== -1) {
          const [dateString, temp] = time.split("T");
          const [times] = temp.split(".");

          return `${dateString} ${times === "00:00:00" ? "" : times}`;
        }

        return time;
      }

      return "";
    });

    /** 标签 */
    const tags = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { tag, tags = tag } = props.article.frontmatter;

      if (typeof tags === "string") return [capitalize(tags)];

      if (Array.isArray(tags)) return tags.map((item) => capitalize(item));

      return [];
    });

    return { tags, time };
  },

  computed: {
    /** 作者 */
    author(): string {
      return (
        (this.article.frontmatter.author as string | false | undefined) ||
        (this.$themeConfig.author && this.article.frontmatter.author !== false
          ? this.$themeConfig.author
          : "")
      );
    },

    readtime(): string {
      const { readingTime } =
        this.$themeLocaleConfig || i18n.getDefaultLocale();

      return this.article.readingTime.minutes < 1
        ? readingTime.minute
        : readingTime.time.replace(
            "$time",
            Math.round(this.article.readingTime.minutes).toString()
          );
    },
  },
});
