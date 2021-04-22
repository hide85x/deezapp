<template>
  <div class="searchbar">
    <input
    v-model="query"
      placeholder="what is it you're looking for..."
      type="text"
      class="searchbar__input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "../store/index";
export default defineComponent({
  name: "Searchbar",
  props: {
    msg: String,
  },
  setup(props) {
    console.log(store);

    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.searchbar {
  &__input {
    background: transparent;
    border: none;
    border-bottom: 2px solid black;
    text-align: center;
    font-size: 1.2rem;
    padding: 5px;
    outline: none;
    height: 40px;
    width: 50%;
    transition: background-color 0.3s ease, border-radius 0.3s ease;
    &:focus {
      background: rgba(255, 255, 255, 0.514);
      border-radius: 20px;
    }
  }
}
</style>
