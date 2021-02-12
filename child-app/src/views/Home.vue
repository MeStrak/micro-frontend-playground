<template>
  <div class="home">
    <HelloWorld msg="This is child app 1!!!!" />
    <v-select
      v-model="value"
      :items="items"
      chips
      label="Chips"
      multiple
      solo
      @change="changedValue"
    ></v-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src
import Framebus from "framebus";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private items = ["foo", "bar", "fizz", "buzz"];
  private value = ["foo", "bar", "fizz", "buzz"];

  mounted() {
    const bus = new Framebus();

    const vthis = this; // eslint-disable-line @typescript-eslint/no-this-alias
    bus
      .target({ channel: "ParentApp" })
      .on("contextUpdate", function (data: Record<string, unknown>) {
        const ev = this as MessageEvent;
        const messagePrefix = "/*framebus*/";
        const dataObj = JSON.parse(ev.data.replace(messagePrefix, ""));
        console.log(ev);
        console.log(data.from + " was updated to: " + data.contents);
        vthis.value = data.contents as [];
      });
  }
}
</script>
