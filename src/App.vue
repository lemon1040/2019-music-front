<template>
  <div id="app">
    <router-view></router-view>
    <BackTop></BackTop>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin-bottom: 50px;
}
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
@font-face {
  font-family: "wawati";
  src: url("./assets/WawaSC-Regular.otf") format("truetype");
}

::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
}
::-webkit-scrollbar-track {
    background: 0 0;
}
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

</style>
