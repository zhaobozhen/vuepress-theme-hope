import { defineComponent } from "@vue/composition-api";
import BlogInfo from "@BlogInfo";
import BlogPage from "@BlogPage";
import Common from "@theme/components/Common.vue";
import Home from "@theme/components/Home.vue";
import Page from "@theme/components/Page.vue";

export default defineComponent({
  name: "Layout",
  components: { BlogInfo, BlogPage, Common, Home, Page },
});
