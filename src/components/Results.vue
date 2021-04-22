<template>
  <div class="results" v-if="results">
    <div class="results__item" v-for="res in results.value" :key="res.id">
      <p>{{ res.title }}</p>
      <img :src="res.album.cover_medium" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { SingleALbum } from "../interfaces/interface";
import store from "../store/index";
export default defineComponent({
  setup() {
    return {
      results: computed(() => store.getters.getResults),
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

  &__item {
    background: black;
    color: white;
    box-shadow: 4px 24px 2px -2px rgb(204, 0, 0);
    font-size: 1.2rem;
    width: 300px;
    transition: transform 0.3s ease;
    z-index: 10;
    &:hover {
      transform: scale(1.3) rotate(-5deg);
    }
    &:nth-child(even) p {
      transform: rotate(-2deg);
    }
  }
  .results__item:nth-child(odd) {
    transform: rotate(2deg);
    z-index: 10;
  }
}
</style>