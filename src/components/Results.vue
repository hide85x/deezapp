<template>
  <div class="results" v-if="results">
    <div class="results__item" v-for="result in results" :key="result.id">
      <p>{{ result.title }}</p>
      <img :src="result.album.cover_medium" alt="" />
      <Modal :result="result" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { SingleALbum } from "../interfaces/interface";
import store from "../store/index";
import Modal from "./Modal.vue";
export default defineComponent({
  components: { Modal },
  setup() {
    return {
      results: computed((): SingleALbum[] => store.getters.getResults.value),
    };
  },
});
</script>

<style lang="scss" scoped>
.results {
  margin-top: 50px;
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 0;
  &__item:nth-child(odd) {
    transform: rotate(-5deg);
  }
  &__item:nth-child(even) {
    transform: rotate(2deg);
  }
  &__item {
    background: black;
    color: white;
    box-shadow: 14px 24px 2px -2px rgb(204, 0, 0);
    font-size: 1.2rem;
    width: 250px;
    transition: all 0.3s ease;
    z-index: 10;
    p {
      padding: 10px;
    }

    &:hover {
      transform: scale(1.3) rotate(-5deg);
      z-index: 22;
      cursor: pointer;
      box-shadow: 0 0 12px 1500px rgba(0, 0, 0, 0.664);
    }
  }
}
</style>