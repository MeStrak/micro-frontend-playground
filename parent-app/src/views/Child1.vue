<template>
  <div>
    before
    <iframe
      v-resize.quiet="{ log: true }"
      width="100%"
      frameborder="0"
      src="https://8080-a6b6d588-a78c-4b29-8563-e0f15ab5d201.ws-eu03.gitpod.io/"
    ></iframe>
  </div>
</template>
<script>
import Vue from "vue";
import iFrameResize from "iframe-resizer/js/iframeResizer";
export default Vue.extend({
  directives: {
    resize: {
      bind: function (
        el,
        {
          options = {
            scrolling: true,
          },
        }
      ) {
        el.addEventListener("load", () => iFrameResize(options, el));
      },
    },
  },
});
</script>
<style scoped>
</style>
