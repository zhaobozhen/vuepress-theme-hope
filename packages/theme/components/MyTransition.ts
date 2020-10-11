import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "MyTransition",

  props: {
    delay: { type: Number, default: 0 },
    duration: { type: Number, default: 0.25 },
  },

  setup(props) {
    const setStyle = (items: HTMLElement): void => {
      items.style.transition = `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
      items.style.transform = "translateY(-20px)";
      items.style.opacity = "0";
    };

    const unsetStyle = (items: HTMLElement): void => {
      items.style.transform = "translateY(0)";
      items.style.opacity = "1";
    };

    return { setStyle, unsetStyle };
  },
});
