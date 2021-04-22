<template>
  <div class="home">
    <Searchbar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Searchbar from '@/components/Searchbar.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Searchbar,
  },
});
</script>
<style scoped lang="scss">
.home {
  z-index: 22;
}

</style>
