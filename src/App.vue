<template>
  <div class="bg"></div>
  <Nav />
  <router-view />
</template>

<script>
import Nav from "./components/Nav";
export default {
  components: {
    Nav,
  },
};
</script>
<style lang="scss">
#app, html, body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.bg {
  position: absolute;
  background: url("./assets/neurons.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -99;
}
</style>
