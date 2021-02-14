<template>
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col v-for="card in cards" :key="card" cols="12">
        <v-card>
          <v-subheader>{{ card }}</v-subheader>

          <v-list two-line>
            <template v-for="n in 6">
              <v-list-item
                :key="n"
                @click="
                  sheet = !sheet;
                  sheetTitle = n;
                "
              >
                <v-list-item-avatar color="white">
                  <v-img
                    :src="require('../assets/logo.svg')"
                    class="my-3"
                    contain
                  />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Item {{ n }}</v-list-item-title>

                  <v-list-item-subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil repellendus distinctio similique
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-bottom-sheet v-model="sheet" inset>
        <v-sheet class="text-center">
          <v-card>
            <v-card-title class="headline">
              Viewing Item {{ sheetTitle }}
            </v-card-title>

            <iframe
              v-resize.quiet="{ log: true }"
              width="100%"
              frameborder="0"
              :src="childApp"
            ></iframe>
          </v-card>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </v-container>
</template>

<script>
import iFrameResize from "iframe-resizer/js/iframeResizer";

export default {
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
    sheet: false,
    sheetTitle: "x",
    childApp: process.env.VUE_APP_CHILD_APP_URL,
  }),
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
};
</script>
