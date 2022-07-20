<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Button />
    <a-button type="primary" html-type="submit"> Submit </a-button>
  </div>
</template>

<script>
import Button from "./components/Button/Button.vue";
export default {
  name: "App",
  components: {
    Button,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
