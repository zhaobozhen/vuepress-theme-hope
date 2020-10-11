import { PropType, defineComponent } from "@vue/composition-api";
import ArticleInfo from "@theme/components/Blog/ArticleInfo.vue";
import LockIcon from "@mr-hope/vuepress-shared-utils/icons/LockIcon.vue";
import { PageComputed } from "@mr-hope/vuepress-types";
import StickyIcon from "@mr-hope/vuepress-shared-utils/icons/StickyIcon.vue";
import { pathHitKeys } from "@theme/util/encrypt";

export default defineComponent({
  name: "ArticleItem",

  components: { ArticleInfo, LockIcon, StickyIcon },

  props: {
    article: { type: Object as PropType<PageComputed>, required: true },
  },

  computed: {
    /** 文章是否加密 */
    isEncrypted(): boolean {
      return (
        pathHitKeys(this.$themeConfig.encrypt, this.article.path).length !==
          0 || Boolean(this.article.frontmatter.password)
      );
    },
  },
});
