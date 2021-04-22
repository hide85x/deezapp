<template>
  <div class="searchbar">
    <form @submit.prevent="getDataResults">
      <input
        v-model="query"
        placeholder="what is it you're looking for..."
        type="text"
        class="searchbar__input"
      />
    </form>
    <Results/>

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
      results: computed(()=> store.getters.getResults,)
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.searchbar {
  padding: 200px 0;
  &__input {
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
      background: rgba(255, 255, 255, 0.514);
      transform: rotate(3deg);
      box-shadow:  14px 14px 2px -2px rgb(0, 0, 0);
    }
  }
}
</style>
