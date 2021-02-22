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
          Welcome to THE STUDIO
        </h1>

        <p class="subheading font-weight-regular">
          This is a hacked together playground to test stuff out for running micro front ends.
        </p>
<p class="subheading font-weight-regular">
          So far the test covers iFrames and single-spa as possible micro frontend frameworks.
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Micro frontends</h2>
        <p>
          The app has several embedded frontends. Launch the individual
          frameless pages with the links below.
        </p>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">iFrame ecosystem</h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in iframeEcosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Messy code disclaimer</h2>
  <p>
          This is not a venture into clean code, it is a quickly hacked together POC and defintely not for production use!
        </p>

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
declare let require: any;

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({
    iframeEcosystem: [
      {
        text: "iframe-resizer for responsive iFrames",
        href: "https://github.com/davidjbradshaw/iframe-resizer/"
      },
      {
        text: "framebus for context syncing between parent and child app",
        href: "https://github.com/braintree/framebus"
      },
    ],
    importantLinks: [
      {
        text: "Embedded micro app 1",
        href: process.env.VUE_APP_CHILD_APP_URL
      },
      {
        text: "Long content",
        href: process.env.VUE_APP_CHILD_APP_URL.concat("/long")

      },
      {
        text: "App with more complex layout",
        href: process.env.VUE_APP_CYTO_APP_URL
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
