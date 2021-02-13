<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Let's test iFrames in dialogs
        </h1>

        <p class="subheading font-weight-regular">
          Works pretty well but scroll bar for the iFrame needs styling.
        </p>
      </v-col>
    </v-row>

    <v-btn color="primary" dark @click.stop="dialogNormal = true">
      Show a dialog containing an iFrame.
    </v-btn>
    <br /><br />
    <v-btn color="primary" dark @click.stop="dialogGraph = true">
      Show another dialog containing an iFrame.
    </v-btn>
    <br /><br />
    <v-btn color="primary" dark @click.stop="dialogLong = true">
      Show a LONG dialog containing an iFrame.
    </v-btn>
    <br /><br />
    <v-btn color="primary" dark @click.stop="dialogTabs = true">
      Show a dialog with tabs containing iFrames.</v-btn
    >

    <v-dialog v-model="dialogNormal" max-width="80%">
      <v-card>
        <v-card-title class="headline">
          Can you tell that this isn't in the app?
        </v-card-title>

        <iframe
          v-resize.quiet="{ log: true }"
          width="100%"
          frameborder="0"
          :src="childApp"
        ></iframe>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" text @click="dialogNormal = false">
            No! WTF?
          </v-btn>

          <v-btn color="green darken-1" text @click="dialogNormal = false">
            Yup
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogGraph" max-width="80%">
      <v-card>
        <v-card-title class="headline">
          What do you think about this one?
        </v-card-title>

        <iframe
          v-resize.quiet="{ log: true }"
          width="100%"
          frameborder="0"
          :src="graphApp"
        ></iframe>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" text @click="dialogGraph = false">
            Horrible
          </v-btn>

          <v-btn color="green darken-1" text @click="dialogGraph = false">
            Nice
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogLong" max-width="80%">
      <v-card>
        <v-card-title class="headline">
          Here's a long one. Can you tell this time?</v-card-title
        >

        <iframe
          v-resize.quiet="{ log: true }"
          width="100%"
          frameborder="0"
          :src="childAppLong"
        ></iframe>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" text @click="dialogLong = false">
            No! WTF?
          </v-btn>

          <v-btn color="green darken-1" text @click="dialogLong = false">
            Yup
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- tabs -->

    <v-dialog v-model="dialogTabs" max-width="80%">
      <v-card>
        <v-card-title class="headline">
          Everything from before, this time in tabs.</v-card-title
        >

        <v-tabs v-model="tab" background-color="transparent" grow>
          <v-tab key="normal"> Normal </v-tab>
          <v-tab key="long"> Long </v-tab>
          <v-tab key="graph"> Graph </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item key="normal">
            <iframe
              v-resize.quiet="{ log: true }"
              width="100%"
              frameborder="0"
              :src="childApp"
            ></iframe>
          </v-tab-item>

          <v-tab-item key="long">
            <iframe
              v-resize.quiet="{ log: true }"
              width="100%"
              frameborder="0"
              :src="childAppLong"
            ></iframe>
          </v-tab-item>

          <v-tab-item key="graph">
            <iframe
              v-resize.quiet="{ log: true }"
              width="100%"
              frameborder="0"
              :src="graphApp"
            ></iframe>
          </v-tab-item>
        </v-tabs-items>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" text @click="dialogLong = false">
            No! WTF?
          </v-btn>

          <v-btn color="green darken-1" text @click="dialogLong = false">
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
  data() {
    return {
      dialogNormal: false,
      dialogLong: false,
      dialogGraph: false,
      dialogTabs: false,
      tab: null,
      graphApp: process.env.VUE_APP_CYTO_APP_URL,
      childApp: process.env.VUE_APP_CHILD_APP_URL,
      childAppLong: process.env.VUE_APP_CHILD_APP_URL + "/long"
    };
  },
  directives: {
    resize: {
      bind: function(
        el,
        {
          options = {
            scrolling: false
          }
        }
      ) {
        el.addEventListener("load", () => iFrameResize(options, el));
      }
    }
  }
});
</script>
<style scoped></style>
