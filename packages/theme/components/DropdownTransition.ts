import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "DropdownTransition",

  setup() {
    const setHeight = (items: HTMLElement): void => {
      // explicitly set height so that it can be transitioned
      items.style.height = `${items.scrollHeight}px`;
    };

    const unsetHeight = (items: HTMLElement): void => {
      items.style.height = "";
    };

    return { setHeight, unsetHeight };
  },
});
