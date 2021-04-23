<template>
  <div class="nav">
    <img class="nav__logo" src="../assets/casette.png" alt="" />
    <div class="nav__items">
      <router-link class="nav__item" to="/"><p id="pone">Home</p> </router-link>
      <router-link class="nav__item" to="/faveshit"
        ><p id="ptwo">Faveshit</p>
      </router-link>
      <router-link class="nav__item" to="/about"
        ><p id="pthree">About</p>
      </router-link>
    </div>
    <div class="nav__login">
      <router-link  class="nav__item item" to="/login">
        <p class="item">login</p></router-link
      >
      <router-link class="nav__item item" to="/login">
        <p class="item">sigIn</p></router-link
      >
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
  position: fixed;
  margin: 50px 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgb(0, 0, 0));
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-right: 3px solid black;
  border-radius: 0 20px 20px 0;
  height: 60px;
  width: 100%;
  z-index: 20;
  @media (max-width: 700px) {
    width: 100%;
  }

  &__logo {
    width: 200px;
    transform: rotate(10deg);
    position: absolute;
    left: 10px;
    z-index: 20;
    @media (max-width: 750px) {
      width: 100px;
      margin: 0;
    }
  }
  &__items {
    background: red;
    display: flex;
    justify-content: end;
    padding: 5px 0;
    transform: rotate(-5deg);
    z-index: 100;
    @media (max-width: 700px) {
      flex-direction: column;
    }
    p {
      padding: 8px;
      margin: 0;
      transform: rotate(-20deg);
    }
    #ptwo {
      transform: rotate(10deg);
    }
  }
  &__item {
    font-size: 1.4rem;
    margin-right: 10px;
    text-decoration: none;
    font-weight: bold;
    color: white;
    &:hover {
      text-decoration: underline;
      transform: scale(1.2);
    }

    @media (max-width: 600px) {
    }

    &.router-link-exact-active {
      background: black;
    }
  }
  &__login {
    margin-right: 10px;
    margin-left: 20px;
    @media (min-width: 1100px) {
      margin-right: 50px;
    }
    .item {
        text-decoration: none;
        padding: 0;
        margin: 0;
    &:hover {
      transform: rotate(12deg) scale(1.2);
      cursor: pointer;
      color: red;
      text-decoration: underline red;
    }
    }
  }
}
</style>