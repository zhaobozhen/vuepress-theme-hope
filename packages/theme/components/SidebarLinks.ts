import { PropType, defineComponent, ref } from "@vue/composition-api";
import { isActive } from "@theme/util/path";

import SidebarGroup from "@theme/components/SidebarGroup.vue";
import SidebarLink from "@theme/components/SidebarLink.vue";

import { PageComputed } from "@mr-hope/vuepress-types";
import { Route } from "vue-router";
import { SidebarHeaderItem, SidebarItem } from "@theme/util/sidebar";

/** 当前项目是否激活 */
const descendantIsActive = (route: Route, item: SidebarItem): boolean => {
  if (item.type === "group")
    return item.children.some((child: SidebarHeaderItem | SidebarItem) => {
      if (child.type === "group") return descendantIsActive(route, child);

      return child.type === "page" && isActive(route, child.path);
    });

  return false;
};

/** 打开的侧边栏组的索引值 */
const resolveOpenGroupIndex = (route: Route, items: SidebarItem[]): number => {
  for (let i = 0; i < items.length; i++)
    if (descendantIsActive(route, items[i])) return i;

  return -1;
};

export default defineComponent({
  name: "SidebarLinks",

  components: { SidebarGroup, SidebarLink },

  props: {
    items: {
      type: Array as PropType<SidebarItem[]>,
      default: (): SidebarItem[] => [],
    },

    depth: { type: Number, default: 0 },
  },

  setup() {
    const openGroupIndex = ref(0);

    const toggleGroup = (index: number): void => {
      openGroupIndex.value = index === openGroupIndex.value ? -1 : index;
    };

    return { openGroupIndex, toggleGroup };
  },

  watch: {
    $route(): void {
      this.refreshIndex();
    },
  },

  created(): void {
    this.refreshIndex();
  },

  methods: {
    refreshIndex(): void {
      const index = resolveOpenGroupIndex(this.$route, this.items);

      if (index > -1) this.openGroupIndex = index;
    },

    isActive(page: PageComputed): boolean {
      return isActive(this.$route, page.regularPath);
    },
  },
});
