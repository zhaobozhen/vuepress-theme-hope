import { Component, Vue } from "vue-property-decorator";
import { Route } from "vue-router";

interface BreadCrumbConfig {
  title: string;
  icon?: string;
  url: string;
}

@Component
export default class BreadCrumb extends Vue {
  private get enable(): boolean {
    const globalEnable = this.$themeConfig.breadcrumb !== false;
    const pageEnable = this.$page.frontmatter.breadcrumb as boolean | undefined;

    return (
      ((globalEnable && pageEnable !== false) || pageEnable === true) &&
      this.config.length > 1
    );
  }

  private get iconEnable(): boolean {
    const globalEnable = this.$themeConfig.breadcrumbIcon !== false;
    const pageEnable = this.$page.frontmatter.breadcrumbIcon as
      | boolean
      | undefined;

    return (
      this.enable &&
      ((globalEnable && pageEnable !== false) || pageEnable === true)
    );
  }

  private get iconPrefix(): string {
    const { iconPrefix } = this.$themeConfig;

    return iconPrefix === "" ? "" : iconPrefix || "icon-";
  }

  private get config(): BreadCrumbConfig[] {
    const breadcrumbConfig: BreadCrumbConfig[] = [];
    const { pages } = this.$site;
    const links = this.getLinks(this.$route);

    // generate breadcrumb config
    for (let index = 1; index < links.length; index++)
      for (let index2 = 0; index2 < pages.length; index2++) {
        const element = pages[index2];

        if (element.path === links[index]) {
          breadcrumbConfig.push({
            title: element.title,
            icon: element.frontmatter.icon as string | undefined,
            url: element.path,
          });
          break;
        }
      }

    return breadcrumbConfig;
  }

  private getLinks(route: Route): string[] {
    const routePaths = route.fullPath.split("#")[0].split("/");
    const links: string[] = [];
    let link = "";

    // generate links
    routePaths.forEach((element, index) => {
      if (index !== routePaths.length - 1) {
        link += `${element}/`;
        links.push(link);
      } else if (element !== "") {
        link += element;
        links.push(link);
      }
    });

    return links;
  }
}
