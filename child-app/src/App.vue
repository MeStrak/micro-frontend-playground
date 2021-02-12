<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import PubSub from "pubsub-js";
import Framebus from "framebus";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  updated() {
console.log("update");
  },
  mounted() {
    const resizerScript = document.createElement("script");
    resizerScript.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.1/js/iframeResizer.contentWindow.min.js"
    );
    document.head.appendChild(resizerScript);

    console.log("mount");

    const bus = new Framebus();
    
    const vthis = this; // eslint-disable-line @typescript-eslint/no-this-alias
    bus
    .target({channel: "ParentApp"})
    .on("contextUpdate", function (data: Record<string, unknown>) {
       const ev = this as MessageEvent;
       const messagePrefix = "/*framebus*/";
       const dataObj = JSON.parse(ev.data.replace(messagePrefix, ""));
       console.log(ev);
        
      console.log(data.from + " was updated to: " + data.contents);
      vthis.value = Object.assign({}, data.contents);
      console.log(vthis);
      
    });

  },
  methods: {
fart(){
    console.log('farty fart');
}
  }
});
</script>
<style>
</style>

