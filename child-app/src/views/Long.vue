<template>
  <div class="home">
      This is some long content
    <HelloWorld msg="This is child app 1!!!!" />
        <HelloWorld msg="This is child app 1!!!!" />
            <HelloWorld msg="This is child app 1!!!!" />
                <HelloWorld msg="This is child app 1!!!!" />

  </div>
  
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
