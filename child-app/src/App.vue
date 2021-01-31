<template>
  <v-app>
      <HelloWorld />

  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
  mounted() {
    const resizerScript = document.createElement('script')
    resizerScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.1/js/iframeResizer.contentWindow.min.js')
    document.head.appendChild(resizerScript)
    },
});
</script>

