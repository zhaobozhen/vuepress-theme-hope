import { defineComponent } from "@vue/composition-api";
import { capitalize } from "@mr-hope/vuepress-shared-utils";
import navigate from "@theme/util/navigate";

import ArticleList from "@theme/components/Blog/ArticleList.vue";

export default defineComponent({
  name: "CategoryList",

  components: { ArticleList },

  setup() {
    return { capitalize };
  },

  methods: {
    /** 点击分类的导航 */
    clickCategory(path: string): void {
      navigate(path, this.$router, this.$route);
    },
  },
});
