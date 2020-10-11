import { PropType, defineComponent } from "@vue/composition-api";

import BloggerInfo from "@theme/components/Blog/BloggerInfo.vue";
import NavLinks from "@theme/components/NavLinks.vue";
import SidebarLinks from "@theme/components/SidebarLinks.vue";

import { BlogOptions } from "@theme/types";
import { SidebarItem } from "@theme/util/sidebar";

export default defineComponent({
  name: "Sidebar",

  components: { BloggerInfo, SidebarLinks, NavLinks },

  props: {
    items: { type: Array as PropType<SidebarItem[]>, required: true },
  },

  computed: {
    blogConfig(): BlogOptions {
      return this.$themeConfig.blog || {};
    },

    sidebarDisplay(): "mobile" | "none" | "always" {
      return this.blogConfig.sidebarDisplay || "none";
    },
  },
});
