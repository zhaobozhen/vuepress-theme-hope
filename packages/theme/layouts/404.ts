import { defineComponent } from "@vue/composition-api";
import Common from "@theme/components/Common.vue";
import { i18n, HopeLangI18nConfig } from "@mr-hope/vuepress-shared-utils";

export default defineComponent({
  name: "NotFound",

  components: { Common },

  setup() {
    const back = (): void => {
      window.history.go(-1);
    };

    return { back };
  },

  computed: {
    i18n(): HopeLangI18nConfig["error404"] {
      return (
        this.$themeLocaleConfig.error404 || i18n.getDefaultLocale().error404
      );
    },

    msg(): string {
      return this.i18n.hint[Math.floor(Math.random() * this.i18n.hint.length)];
    },
  },
});
