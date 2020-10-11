import { defineComponent, ref } from "@vue/composition-api";
import ClickOutside from "@theme/util/click-outside";
import ThemeOptions from "@theme/components/Theme/ThemeOptions.vue";

export default defineComponent({
  name: "ThemeColor",

  components: { ThemeOptions },

  directives: {
    "click-outside": ClickOutside,
  },

  setup() {
    const showMenu = ref(false);

    const clickOutside = (): void => {
      showMenu.value = false;
    };

    return { clickOutside, showMenu };
  },
});
