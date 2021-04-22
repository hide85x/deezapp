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


html, body, * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
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
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  z-index: -99;
}
</style>
