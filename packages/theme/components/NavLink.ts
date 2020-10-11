import { PropType, computed, defineComponent } from "@vue/composition-api";
import { ensureExt, isExternal, isMailto, isTel } from "@theme/util/path";
import { NavBarConfigItem } from "@theme/util/navbar";

export default defineComponent({
  name: "NavLink",

  props: {
    item: { type: Object as PropType<NavBarConfigItem>, required: true },
  },

  setup(props, { emit }) {
    const link = computed(() =>
      props.item.link ? ensureExt(props.item.link) : ""
    );

    const isNonHttpURI = computed(
      () => isMailto(link.value) || isTel(link.value)
    );

    const target = computed(() => {
      if (isNonHttpURI.value) return null;

      if (props.item.target) return props.item.target;

      return isExternal(link.value) ? "_blank" : "";
    });

    const isBlankTarget = computed(() => target.value === "_blank");

    const isInternal = computed(
      () => !isExternal(link.value) && !isBlankTarget.value
    );

    const rel = computed(() => {
      if (isNonHttpURI.value) return null;
      if (props.item.rel === false) return null;
      if (props.item.rel) return props.item.rel;

      return isBlankTarget.value ? "noopener noreferrer" : null;
    });

    const focusoutAction = (): void => {
      // TODO: Add in Vue3
      // eslint-disable-next-line vue/require-explicit-emits
      emit("focusout");
    };

    return { link, isBlankTarget, isInternal, rel, target, focusoutAction };
  },

  computed: {
    iconPrefix(): string {
      const { iconPrefix } = this.$themeConfig;

      return iconPrefix === "" ? "" : iconPrefix || "icon-";
    },

    exact(): boolean {
      if (this.$site.locales)
        return Object.keys(this.$site.locales).some(
          (rootLink) => rootLink === this.link
        );

      return this.link === "/";
    },
  },
});
