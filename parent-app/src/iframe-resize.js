import iFrameResize from "iframe-resizer/js/iframeResizer";

export default {
  bind(el, binding) {
    iFrameResize(binding.value, el);
  }
};
