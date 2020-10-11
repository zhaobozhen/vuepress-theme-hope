import { PropType, defineComponent, h } from "@vue/composition-api";
import { hashRE, isActive } from "@theme/util/path";

import { VNode } from "vue";
import { Route } from "vue-router";
import {
  SidebarAutoItem,
  SidebarExternalItem,
  SidebarGroupItem,
  SidebarHeader,
  SidebarHeaderItem,
  SidebarItem,
  groupSidebarHeaders,
} from "@theme/util/sidebar";

/** 渲染图标 */
const renderIcon = (icon: string): VNode | null =>
  icon
    ? h("i", {
        class: ["iconfont", icon],
        style: "margin-right: 0.2em;",
      })
    : null;

interface RenderLinkOption {
  /** 图标 */
  icon?: string;
  /** 链接地址 */
  link: string;
  /** 链接文字 */
  text: string;
  /** 是否激活 */
  active: boolean;
}

/** 渲染链接 */
const renderLink = ({
  icon = "",
  text,
  link,
  active,
}: RenderLinkOption): VNode =>
  h(
    "RouterLink",
    {
      props: {
        to: link,
        activeClass: "",
        exactActiveClass: "",
      },
      class: {
        active,
        "sidebar-link": true,
      },
    },
    [renderIcon(icon), text]
  );

/** 渲染外部链接 */
const renderExternal = ({ path, title = path }: SidebarExternalItem): VNode =>
  h(
    "a",
    {
      attrs: {
        href: path,
        target: "_blank",
        rel: "noopener noreferrer",
      },
      class: { "sidebar-link": true },
    },
    [title, h("OutboundLink")]
  );

interface RenderChildrenOptions {
  /** 子项 */
  children: SidebarHeader[] | false;
  /** 配置项路径 */
  path: string;
  /** 当前路由对象 */
  route: Route;
  /** 当前深度 */
  depth?: number;
  /** 所允许的最大深度 */
  maxDepth: number;
}

/** 渲染子项 */
const renderChildren = ({
  children,
  path,
  route,
  maxDepth,
  depth = 1,
}: RenderChildrenOptions): VNode | null => {
  if (!children || depth > maxDepth) return null;

  return h(
    "ul",
    { class: "sidebar-sub-headers" },
    children.map((child: SidebarHeader) => {
      const active = isActive(route, `${path}#${child.slug}`);

      return h("li", { class: "sidebar-sub-header" }, [
        renderLink({
          text: child.title,
          link: `${path}#${child.slug}`,
          active,
        }),
        renderChildren({
          children: child.children || false,
          path,
          route,
          maxDepth,
          depth: depth + 1,
        }),
      ]);
    })
  );
};

export default defineComponent({
  name: "SidebarLink",

  props: {
    item: {
      type: Object as PropType<
        | Exclude<SidebarItem, SidebarAutoItem | SidebarGroupItem>
        | SidebarHeaderItem
      >,
      required: true,
    },
  },

  setup(props, { root }) {
    const { $page, $route, $themeConfig, $themeLocaleConfig } = root;

    // 当前配置未获取成功
    if (props.item.type === "error") return (): null => null;

    // 外部链接侧边栏项
    if (props.item.type === "external")
      return (): VNode => renderExternal(props.item as SidebarExternalItem);

    /*
     * Use custom active class matching logic
     * Due to edge case of paths ending with / + hash
     */
    const selfActive = isActive($route, props.item.path);

    /** 当前渲染项目的激活状态 */
    const active =
      // 如果是标题侧边栏的话，其中一个子标题匹配也需要激活
      props.item.type === "header"
        ? selfActive ||
          (props.item.children || []).some((child) =>
            isActive(
              $route,
              `${(props.item as SidebarHeaderItem).basePath}#${child.slug}`
            )
          )
        : selfActive;

    /** 最大显示深度 */
    const maxDepth =
      ($page.frontmatter.sidebarDepth as number | undefined) ||
      ($themeLocaleConfig.sidebarDepth as number) ||
      $themeConfig.sidebarDepth ||
      2;

    // 如果是标题侧边栏
    if (props.item.type === "header")
      // TODO: Rebuild in Vue3
      // return (): (VNode | null)[] => [
      return (): VNode =>
        h("div", [
          renderLink({
            text: (props.item as SidebarHeaderItem).title || props.item.path,
            link: props.item.path,
            active,
          }),
          renderChildren({
            children: (props.item as SidebarHeaderItem).children || false,
            path: (props.item as SidebarHeaderItem).basePath,
            route: $route,
            maxDepth,
          }),
        ]);
    // ];

    /** 是否显示所有标题 */
    const displayAllHeaders =
      ($themeLocaleConfig.displayAllHeaders as boolean | undefined) ||
      $themeConfig.displayAllHeaders;

    const link = renderLink({
      icon:
        $themeConfig.sidebarIcon !== false && props.item.frontmatter.icon
          ? `${
              $themeConfig.iconPrefix === ""
                ? ""
                : $themeConfig.iconPrefix || "icon-"
            }${props.item.frontmatter.icon as string}`
          : "",
      text: props.item.title || props.item.path,
      link: props.item.path,
      active,
    });

    if (
      (active || displayAllHeaders) &&
      props.item.headers &&
      !hashRE.test(props.item.path)
    ) {
      const children = groupSidebarHeaders(props.item.headers);

      // TODO: Rebuild in Vue3
      // return (): (VNode | null)[] => [
      return (): VNode =>
        h("div", [
          link,
          renderChildren({
            children,
            path: props.item.path,
            route: $route,
            maxDepth,
          }),
        ]);
      // ];
    }

    return (): VNode => link;
  },
});
