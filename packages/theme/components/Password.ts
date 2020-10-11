import { defineComponent, nextTick, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Password",

  props: {
    page: { type: Boolean, default: false },
  },

  setup(_, { emit }) {
    const password = ref("");
    const hasTried = ref(false);
    const verify = (): void => {
      hasTried.value = false;
      // TODO: Add in Vue3
      // eslint-disable-next-line vue/require-explicit-emits
      emit("password-verify", password.value);

      void nextTick().then(() => {
        hasTried.value = true;
      });
    };

    return { hasTried, password, verify };
  },

  computed: {
    isMainPage(): boolean {
      return this.$frontmatter.home === true;
    },
  },
});
