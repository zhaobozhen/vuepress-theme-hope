import { PropType, computed, defineComponent, ref } from "@vue/composition-api";

import DropdownTransition from "@theme/components/DropdownTransition.vue";
import NavLink from "@theme/components/NavLink.vue";

import { NavBarConfigItem } from "@theme/util/navbar";

export default defineComponent({
  name: "DropdownLink",

  components: { NavLink, DropdownTransition },

  props: {
    item: { type: Object as PropType<NavBarConfigItem>, required: true },
  },

  setup(props) {
    const open = ref(false);

    const dropdownAriaLabel = computed(
      () => props.item.ariaLabel || props.item.text
    );

    const setOpen = (value: boolean): void => {
      open.value = value;
    };

    const handleDropdown = (event: MouseEvent): void => {
      const isTriggerByTab = event.detail === 0;
      if (isTriggerByTab) setOpen(!open.value);
    };

    const isLastItemOfArray = (
      item: NavBarConfigItem,
      array: NavBarConfigItem[]
    ): boolean => {
      if (Array.isArray(array)) return item === array[array.length - 1];

      return false;
    };

    return {
      dropdownAriaLabel,
      open,
      handleDropdown,
      isLastItemOfArray,
      setOpen,
    };
  },

  computed: {
    iconPrefix(): string {
      const { iconPrefix } = this.$themeConfig;

      return iconPrefix === "" ? "" : iconPrefix || "icon-";
    },
  },

  watch: {
    $route(): void {
      this.open = false;
    },
  },
});
