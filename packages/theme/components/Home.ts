import { defineComponent } from "@vue/composition-api";
import navigate from "@theme/util/navigate";

import MyTransition from "@theme/components/MyTransition.vue";
import NavLink from "@theme/components/NavLink.vue";
import PageFooter from "@theme/components/PageFooter.vue";

interface ActionConfig {
  text: string;
  link: string;
}

export default defineComponent({
  name: "Home",

  components: { MyTransition, NavLink, PageFooter },

  computed: {
    actionLinks(): ActionConfig[] {
      const { action } = this.$frontmatter;
      if (Array.isArray(action)) return action as ActionConfig[];
      return [action] as ActionConfig[];
    },
  },

  methods: {
    navigate(link: string): void {
      navigate(link, this.$router, this.$route);
    },
  },
});
