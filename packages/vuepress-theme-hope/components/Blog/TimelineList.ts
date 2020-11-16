import { Component, Mixins } from "vue-property-decorator";
import MyTransition from "@theme/components/MyTransition.vue";
import TimeIcon from "@mr-hope/vuepress-shared-utils/icons/TimeIcon.vue";
import { TimelineMixin } from "@theme/util/articleMixin";

@Component({ components: { MyTransition, TimeIcon } })
export default class TimelineList extends Mixins(TimelineMixin) {
  private get timeline(): string {
    return (
      this.$themeLocaleConfig.blog.timeline ||
      this.$themeConfig.locales["/"].blog.timeline
    );
  }

  private navigate(url: string): void {
    void this.$router.push(url);
  }
}
