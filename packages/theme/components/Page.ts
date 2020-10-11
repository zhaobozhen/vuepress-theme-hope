import { PropType, defineComponent, ref } from "@vue/composition-api";

import Anchor from "@theme/components/Anchor.vue";
import Comment from "@Comment";
import MyTransition from "@theme/components/MyTransition.vue";
import PageEdit from "@theme/components/PageEdit.vue";
import PageFooter from "@theme/components/PageFooter.vue";
import PageInfo from "@PageInfo";
import PageNav from "@theme/components/PageNav.vue";
import Password from "@theme/components/Password.vue";

import { PageHeader } from "@mr-hope/vuepress-types";
import { SidebarItem } from "@theme/util/sidebar";

export default defineComponent({
  name: "Page",

  components: {
    Anchor,
    Comment,
    MyTransition,
    PageEdit,
    PageFooter,
    PageInfo,
    PageNav,
    Password,
  },

  props: {
    sidebarItems: {
      type: Array as PropType<SidebarItem[]>,
      default: (): SidebarItem[] => [],
    },

    headers: {
      type: Array as PropType<PageHeader[]>,
      default: (): PageHeader[] => [],
    },
  },

  setup() {
    /** 用户输入的密码 */
    const password = ref("");

    return { password };
  },

  computed: {
    /** 是否启用评论 */
    commentEnable(): boolean {
      return this.$themeConfig.comment !== false;
    },

    /** 当前页面密码 */
    pagePassword(): string {
      /** 页面当前密码 */
      const { password } = this.$frontmatter;

      return typeof password === "number"
        ? password.toString()
        : typeof password === "string"
        ? password
        : "";
    },

    /** 当前页面解密状态 */
    pageDescrypted(): boolean {
      return this.password === this.pagePassword;
    },
  },
});
