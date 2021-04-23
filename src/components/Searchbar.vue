<template>
  <div class="searchbar">
    <form class="form" @submit.prevent="getDataResults">
      <input
        v-model="query"
        placeholder="what is it you're looking for..."
        type="text"
        class="form__input"
      />
      <button @click="detDataResults" class="btn">click for tunes</button>
    </form>
    <Results />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "../store/index";
import { ref, computed, onUpdated } from "vue";
import { SingleALbum } from "@/interfaces/interface";
import Results from "./Results.vue";
export default defineComponent({
  components: { Results },
  name: "Searchbar",

  setup(props) {
    let query = ref<String>("");
    const getDataResults = () => {
      store.methods.getDataByQuery(query.value);
    };
    onUpdated(() => {
      console.log(store.getters.getResults.value);
    });
    return {
      getDataResults,
      query,
      results: computed(() => store.getters.getResults),
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.searchbar {
  padding: 200px 0;
  .form {
    &__input {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto;
      background: transparent;
      border: none;
      border-bottom: 2px solid black;
      text-align: center;
      font-size: 1.2rem;
      padding: 5px;
      outline: none;
      height: 60px;
      width: 50%;
      transition: all 0.3s ease, border-radius 0.3s ease;
      &:focus {
        background: rgb(255, 255, 255);
        transform: rotate(3deg);
        box-shadow: 14px 14px 2px -2px rgb(0, 0, 0);
      }
    }
  }
  .btn {
    border: none;
    background: black;
    color: white;
    width: 100px;
    height: auto;
    font-size: 0.9rem;
    transform: rotate(-9deg);
    padding: 10px;
    &:hover {
      filter: invert(1);
      box-shadow:0 0 7px 3px white;
      cursor: pointer;
      transform: rotate(-3deg);
    }
  }
}
</style>
