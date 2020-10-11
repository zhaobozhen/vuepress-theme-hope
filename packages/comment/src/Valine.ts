import {
  PropType,
  computed,
  defineComponent,
  nextTick,
  ref,
} from "@vue/composition-api";
import { i18n } from "@mr-hope/vuepress-shared-utils";
import Valine from "valine";

import { Route } from "vue-router";
import { ValineOptions } from "../types";

export default defineComponent({
  name: "Valine",

  props: {
    valineConfig: {
      type: Object as PropType<ValineOptions>,
      required: true,
    },
  },

  setup(props) {
    const valineEnable = computed(() =>
      Boolean(
        props.valineConfig &&
          props.valineConfig.appId &&
          props.valineConfig.appKey
      )
    );

    const valine = ref(null as Valine | null);

    return { valine, valineEnable };
  },

  computed: {
    commentDisplay(): boolean {
      if (!this.valineEnable) return false;
      const globalEnable = this.valineConfig.comment !== false;
      const pageEnable = this.$page.frontmatter.comment as boolean | undefined;

      return (globalEnable && pageEnable !== false) || pageEnable === true;
    },

    /** Whether to display view number */
    visitorDisplay(): boolean {
      if (!this.valineEnable) return false;
      const globalEnable = this.valineConfig.visitor !== false;
      const pageEnable = this.$page.frontmatter.visitor as boolean | undefined;

      return (globalEnable && pageEnable !== false) || pageEnable === true;
    },
  },

  watch: {
    $route(to: Route, from: Route): void {
      if (to.path !== from.path)
        // Refresh comment when navigating to a new page
        nextTick(() => {
          this.initValine(to.path);
        });
    },
  },

  mounted(): void {
    if (this.valineEnable) {
      // eslint-disable-next-line
      const AV = require("leancloud-storage");

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      if (typeof window !== "undefined") window.AV = AV;
      this.valine = new Valine();

      nextTick(() => this.initValine(this.$route.path));
    }
  },

  methods: {
    initValine(path: string): void {
      const { valineConfig } = this;

      if (this.valine)
        this.valine.init({
          el: "#valine",
          appId: valineConfig.appId,
          appKey: valineConfig.appKey,
          placeholder:
            valineConfig.placeholder ||
            i18n.getLocale(this.$lang).valineHolder ||
            i18n.getDefaultLocale().valineHolder,
          meta: valineConfig.meta || ["nick", "mail", "link"],
          requiredFields: valineConfig.requiredFields || ["nick"],
          avatar: valineConfig.avatar || "retro",
          visitor: this.visitorDisplay,
          recordIP: valineConfig.recordIP || false,
          path:
            path ||
            (typeof window === "undefined" ? "" : window.location.pathname),
          pageSize: valineConfig.pageSize || 10,
          enableQQ: valineConfig.enableQQ || true,
          emojiCDN: valineConfig.emojiCDN || "",
          emojiMaps: valineConfig.emojiMaps,
          lang: this.$lang === "zh-CN" ? "zh-CN" : "en",
        });
    },
  },
});
