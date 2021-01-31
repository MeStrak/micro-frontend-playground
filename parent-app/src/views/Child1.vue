<template>
  <div>
    <v-card elevation="2"
      >This is some content in a Vuetify card component on the parent page.
      Below me is an iFrame.</v-card
    >
    <iframe
      v-resize.quiet="{ log: true }"
      width="100%"
      frameborder="0"
      src="https://8080-a6b6d588-a78c-4b29-8563-e0f15ab5d201.ws-eu03.gitpod.io/"
    ></iframe>
    <v-card elevation="2"
      >This Vuetify card is after the iFrame, in the same component in the
      parent app.</v-card
    >
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
            scrolling: false,
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
