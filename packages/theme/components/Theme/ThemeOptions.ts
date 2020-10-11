import { defineComponent, ref } from "@vue/composition-api";
import { HopeLangI18nConfigItem, i18n } from "@mr-hope/vuepress-shared-utils";

import DarkmodeSwitch from "@theme/components/Theme/DarkmodeSwitch.vue";

/** 默认颜色选择器 */
const defaultPicker: Record<string, string> = {
  red: "#e74c3c",
  blue: "#3498db",
  green: "#3eaf7c",
  orange: "#f39c12",
  purple: "#8e44ad",
};

interface ThemeColor {
  /** 颜色列表 */
  list: string[];
  /** 颜色选择器 */
  picker: Record<string, string>;
}

export default defineComponent({
  name: "ThemeOptions",

  components: { DarkmodeSwitch },

  setup() {
    const themeColor = ref({} as ThemeColor);

    const isDarkmode = ref(false);

    return { isDarkmode, themeColor };
  },

  computed: {
    text(): HopeLangI18nConfigItem["themeColor"] {
      return (
        i18n.getLocale(this.$lang).themeColor ||
        i18n.getDefaultLocale().themeColor
      );
    },

    themeColorEnabled(): boolean {
      return this.$themeConfig.themeColor !== false;
    },

    switchEnabled(): boolean {
      return (
        this.$themeConfig.darkmode !== "disable" &&
        this.$themeConfig.darkmode !== "auto"
      );
    },
  },

  mounted(): void {
    /** 所选主题 */
    const theme = localStorage.getItem("theme");

    this.themeColor = {
      list: this.$themeConfig.themeColor
        ? Object.keys(this.$themeConfig.themeColor)
        : Object.keys(defaultPicker),
      picker: this.$themeConfig.themeColor || defaultPicker,
    };

    if (theme) this.setTheme(theme);
  },

  methods: {
    /** 设置主题 */
    setTheme(theme?: string): void {
      const classes = document.body.classList;
      const themes = this.themeColor.list.map(
        (colorTheme) => `theme-${colorTheme}`
      );

      if (!theme) {
        localStorage.removeItem("theme");
        classes.remove(...themes);

        return;
      }

      classes.remove(
        ...themes.filter((themeclass) => themeclass !== `theme-${theme}`)
      );

      classes.add(`theme-${theme}`);
      localStorage.setItem("theme", theme);
    },
  },
});
