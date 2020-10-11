import { computed, defineComponent, ref } from "@vue/composition-api";
import event from "./event";
import { HopeLangI18nConfigItem, i18n } from "@mr-hope/vuepress-shared-utils";

type UpdateEvent =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (Record<string, any> & { skipWaiting: () => Promise<void> }) | null;

export default defineComponent({
  name: "SWUpdatePopup",

  setup() {
    const updateEvent = ref(null as UpdateEvent);

    const onSWUpdated = (value: UpdateEvent): void => {
      updateEvent.value = value;
    };

    const reload = (): void => {
      if (updateEvent.value)
        void updateEvent.value.skipWaiting().then(() => {
          location.reload();
          updateEvent.value = null;
        });
    };

    const enabled = computed(() => Boolean(updateEvent.value));

    event.$on("sw-updated", onSWUpdated);

    return { enabled, onSWUpdated, reload };
  },

  computed: {
    message(): HopeLangI18nConfigItem["pwa"] {
      return i18n.getLocale(this.$lang).pwa || i18n.getDefaultLocale().pwa;
    },
  },
});
