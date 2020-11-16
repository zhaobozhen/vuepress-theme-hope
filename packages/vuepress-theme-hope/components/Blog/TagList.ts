import { Component, Vue } from "vue-property-decorator";
import { navigate } from "@theme/util/navigate";

interface TagOption {
  name: string;
  path: string;
}

@Component
export default class TagList extends Vue {
  private get tagList(): TagOption[] {
    return [
      {
        name:
          this.$themeLocaleConfig.blog.allText ||
          this.$themeConfig.locales["/"].blog.allText,
        path: "/tag/",
      },
      ...(this.$tag.list as TagOption[]),
    ];
  }

  private isActive(name: string): boolean {
    return (
      name ===
      ((this.$currentTag && this.$currentTag.key) ||
        this.$themeLocaleConfig.blog.allText ||
        this.$themeConfig.locales["/"].blog.allText)
    );
  }

  private clickTag(path: string): void {
    navigate(path, this.$router, this.$route);
  }
}
