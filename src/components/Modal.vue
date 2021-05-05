<template>
  <div class="modal">
    <p class="moda__title">by: <span>{{result.artist.name}}</span> </p>
    <p class="modal__title">album name:  <span>{{result.album.title}}</span></p>
    <p>track list</p>
    <ul class="modal__item list" v-for="track in tracklist" :key="track.id">
      <li>asd</li>
      <li class="list__item">{{track.title}}</li>
    </ul>
    <!-- <img :src="result.album.cover_medium" alt="album pic"> -->
  </div>
</template>

<script lang="ts">
import { SingleALbum, Tracks } from "../interfaces/interface";
import { defineComponent , PropType, onMounted, computed} from "vue";
import axios, { AxiosResponse } from 'axios';
export default defineComponent({
  props: {
    result: {
      type: Object as PropType<SingleALbum>,
      required: true
    },
  },
  setup(props) {
    onMounted(() => {
    })
     const tracklist  = computed( ()=> console.log('dupa'))
    return {
      tracklist
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
