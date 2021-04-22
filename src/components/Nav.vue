<template>
  <div class="nav">
    <div></div>
    <img class="nav__logo" src="../assets/casette.png" alt="">
    <div class="nav__items">

    <router-link class="nav__item" to="/">Home</router-link>
    <router-link class="nav__item" to="/faveshit">Faveshit</router-link>
    <router-link class="nav__item" to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.nav {
  margin: 50px;
  background: linear-gradient(to right,rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.479));
  display: flex;
  gap: 30px;
  justify-content: flex-end;
  align-items: center;
  border-right: 2px solid black;
  border-radius: 0 20px 20px 0;
  height: 60px;
  max-width: 450px;
  z-index: 1;
  

  &__logo {
      width: 200px;
      transform: rotate(10deg);
      position: absolute;
    left: 10px;
    z-index: 223;
    @media (max-width:700px) {
        width: 100px;
        
    }
  }
  &__item {
    z-index: 12;
    margin-right: 10px;
    text-decoration: none;
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: black;
      text-decoration: underline;
    }
  }
}
</style>