<template>
  <div class="nav">
    <img class="nav__logo" src="../assets/casette.png" alt="" />
    <div class="nav__items">
      <router-link class="nav__item" to="/"><p id="pone">Home</p> </router-link>
      <router-link class="nav__item" to="/faveshit"><p id="ptwo">Faveshit</p>
      </router-link>
      <router-link class="nav__item" to="/about"><p id="pthree">About</p> </router-link>
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
  background: linear-gradient(to right,rgba(255, 255, 255, 0),rgba(0, 0, 0, 0.671));
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-right: 3px solid black;
  border-radius: 0 20px 20px 0;
  height: 60px;
  width: 500px;
  z-index: 20;
  @media (max-width:700px) {
      width: 250px;
  }

  &__logo {
    width: 200px;
    transform: rotate(10deg);
    position: absolute;
    left: 10px;
    z-index: 20;
    @media (max-width: 700px) {
      width: 100px;
      margin:0;;
    }
  }
  &__items {
    background: red;
    display: flex;
    justify-content: end;
    padding: 5px 0;
    transform: rotate(-5deg);
    @media (max-width:700px) {
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

    @media (max-width: 600px) {
    }

    &.router-link-exact-active {
      background: black;
    }
  }
}
</style>