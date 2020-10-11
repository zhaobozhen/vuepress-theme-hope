import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  name: "Clipboard",

  props: {
    html: { type: String, default: "" },
    lang: { type: String, default: "en-US" },
  },

  setup() {
    const location = ref("");

    if (typeof window !== "undefined")
      location.value = window.location.toString();

    return { location };
  },

  computed: {
    copyright(): string {
      /** 作者 */
      const { author } = this.$themeConfig;
      /** 内容 */
      const content: Record<string, string> = {
        "zh-CN": `${this.html}\n-----\n${
          author ? `著作权归${author}所有。\n` : ""
        }链接：${this.location}`,
        "en-US": `${this.html}\n-----\n${
          author ? `Copyright by ${author}.\n` : ""
        }Link: ${this.location}`,
      };

      return content[this.lang];
    },
  },
});
