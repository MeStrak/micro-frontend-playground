<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-spacer></v-spacer>

      <v-select
        v-model="value"
        :items="items"
        chips
        label="Chips"
        multiple
        solo
        @change="changedValue"
      ></v-select>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>

        <div>I'm the parent app</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text, link] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <router-link :to="link"
            ><v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content></router-link
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Framebus from "framebus";

export default Vue.extend({
  name: "App",

  components: {},
  methods: {
    changedValue: function (value: any) {
      //   var Framebus = require("framebus");
      const bus = new Framebus({
        channel: "ParentApp",
      });
      bus.emit("contextUpdate", {
        from: "filtermenu",
        contents: value,
      });
    },
  },
  mounted() {
    console.log("mount");
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
  },

  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
    links: [
      ["mdi-home", "Home", "/"],
      ["mdi-inbox-arrow-down", "Inbox", "/inbox"],
      ["mdi-iframe-array", "Embedded page", "/child1"],
      ["mdi-launch", "Dialogs", "/dialogs"],
    ],
    items: ["foo", "bar", "fizz", "buzz"],
    value: ["foo", "bar", "fizz", "buzz"],
  }),
});
</script>
<style>
iframe {
  width: 1px;
  min-width: 100%;
}
</style>
