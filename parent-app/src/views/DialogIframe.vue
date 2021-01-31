<template>
  <v-container>
<v-row class="text-center">


      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
Let's test iFrames in dialogs        </h1>

        <p class="subheading font-weight-regular">
          Works pretty well but scroll bar for the iFrame needs styling.
        </p>
      </v-col>
        </v-row>

      <v-btn
        color="primary"
        dark
        @click.stop="dialogNormal= true"
      >
Show a dialog containing an iFrame.      </v-btn>
<br /><br />
<v-btn
        color="primary"
        dark
        @click.stop="dialogLong = true"
      >
Show a LONG dialog containing an iFrame.      </v-btn>
  
      <v-dialog
        v-model="dialogNormal"
        max-width="80%"
      >
        <v-card>
          <v-card-title class="headline">
Can you tell that this isn't in the app?          </v-card-title>
  

    <iframe
      v-resize.quiet="{ log: true }"
      width="100%"
      frameborder="0"
      src="https://8080-a6b6d588-a78c-4b29-8563-e0f15ab5d201.ws-eu03.gitpod.io/"
    ></iframe>

          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              color="red darken-1"
              text
              @click="dialogNormal = false"
            >
              No! WTF?
            </v-btn>
  
            <v-btn
              color="green darken-1"
              text
              @click="dialogNormal = false"
            >
              Yup
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialogLong"
        max-width="80%"
      >
        <v-card>
          <v-card-title class="headline">
Here's a long one. Can you tell this time?</v-card-title>
  

    <iframe
      v-resize.quiet="{ log: true }"
      width="100%"
      frameborder="0"
      src="https://8080-a6b6d588-a78c-4b29-8563-e0f15ab5d201.ws-eu03.gitpod.io/long"
    ></iframe>

          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              color="red darken-1"
              text
              @click="dialogLong = false"
            >
              No! WTF?
            </v-btn>
  
            <v-btn
              color="green darken-1"
              text
              @click="dialogLong = false"
            >
              Yup
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

  </v-container>
</template>
<script>
import Vue from "vue";
import iFrameResize from "iframe-resizer/js/iframeResizer";
export default Vue.extend({
    data () {
    return {
      dialogNormal: false,
      dialogLong: false,

    }
  },
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
