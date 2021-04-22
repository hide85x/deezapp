<template>
  <div class="about">
    <p class="h1">Let me tell you a lil bit about this site ay?!</p>

    <div class="pdiv">
      <p>It was made with Vue3, powered by TypeSript</p>
      <p>
        it gets data from might Deeeezer and let You login and add shit'n <br />
        stuff through your ol'pal goooogle!
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100vh;
  color: black;
  .h1 {
    margin: 40px;
    transform: rotate(3deg);
    font-size: 1.8rem;
    padding: 5px;
    background: red;
    color: white;
  }
  .pdiv {
    transform: rotate(-1deg);
    font-size: 1.6rem;
    background: black;
    color: white;
    font-weight: 600;
    padding: 20px;
  }
}
</style>
