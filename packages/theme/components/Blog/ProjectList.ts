import { defineComponent } from "@vue/composition-api";
import navigate from "@theme/util/navigate";

import ArticleIcon from "@mr-hope/vuepress-shared-utils/icons/ArticleIcon.vue";
import BookIcon from "@mr-hope/vuepress-shared-utils/icons/BookIcon.vue";
import LinkIcon from "@mr-hope/vuepress-shared-utils/icons/LinkIcon.vue";
import ProjectIcon from "@mr-hope/vuepress-shared-utils/icons/ProjectIcon.vue";

export default defineComponent({
  name: "ProjectList",

  components: { ArticleIcon, BookIcon, LinkIcon, ProjectIcon },

  methods: {
    navigate(link: string): void {
      navigate(link, this.$router, this.$route);
    },
  },
});
