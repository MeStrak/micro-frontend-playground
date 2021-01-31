<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

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
      <!-- <vue-friendly-iframe
        src="https://8081-a6b6d588-a78c-4b29-8563-e0f15ab5d201.ws-eu03.gitpod.io/"
      ></vue-friendly-iframe> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
    links: [
      ["mdi-home", "Home", "/"],
      ["mdi-inbox-arrow-down", "Inbox", "/inbox"],
      ["mdi-iframe-array", "Embedded page", "/child1"],
      ["mdi-launch", "Dialogs", "/dialogs"],
    ],
  }),
});
</script>
<style >
iframe {
  width: 1px;
  min-width: 100%;
}
</style>
