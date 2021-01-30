<template>
  <div style="height: 100%">
    <iframe
      class="second-row"
      src="https://8081-a6b6d588-a78c-4b29-8563-e0f15ab5d201.ws-eu03.gitpod.io/"
    ></iframe>
    <iframe
      class="second-row"
      src="https://8081-a6b6d588-a78c-4b29-8563-e0f15ab5d201.ws-eu03.gitpod.io/"
    ></iframe>
  </div>
</template>

<style scoped>
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.row-container {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: blue;
  overflow: hidden;
}
.first-row {
  background-color: lime;
}
.second-row {
  flex-grow: 1;
  border: none;
  margin: 0;
  padding: 0;
  width: 105%;
  height
}
</style>
