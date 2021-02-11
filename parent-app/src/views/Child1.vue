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
      :src=childApp
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
  data () {
      return {
          graphApp: process.env.VUE_APP_CYTO_APP_URL,
          childApp: process.env.VUE_APP_CHILD_APP_URL
      }
  }
});
</script>
<style scoped>
</style>
