<template>
  <div class="home">
    
    <Searchbar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Searchbar from "@/components/Searchbar.vue"; // @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default defineComponent({
  name: "Home",
  components: {
    Searchbar,
    Nav,
  },
});
</script>
<style scoped lang="scss">
.home {
  z-index: 22;
}
</style>
