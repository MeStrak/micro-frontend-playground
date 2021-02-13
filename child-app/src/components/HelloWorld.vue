<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
         You're in the STUDY ZONE.
        </h1>

        <p class="subheading font-weight-regular">
          Let's go to work!
        </p>
              <p class="subheading font-weight-regular">
                  I am a micro front end.<br />
        </p>
      </v-col>

<v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Isolated environment
        </h2>
              <p class="subheading font-weight-regular">
                  
                      Everything you see is running in an isolated environment.<br />
                      My code base and release cycle is totally independent of the parent application.


        </p>

      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Controlled context sync
        </h2>
              <p class="subheading font-weight-regular">
                  
          I allow synchronisation of filters and other contextual information from my parent app.<br />
          I fully control which events I subscribe to, and which data I will accept.

        </p>

      </v-col>

      
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
});
</script>

