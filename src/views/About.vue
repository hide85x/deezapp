<template>
  <div class="about">
    <h2 class="h1">Let me tell you a lil bit about this site ay?!</h2>

    <div class="pdiv">
      <p>It was made with Vue3, powered by TypeScript</p>
      <p>
        it gets data from mighty Deeeezer and let You login and add shit'n stuff <br />
         through your ol'pal uncle gooOOoogle!
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
  padding-top: 50px;
  height: 100vh;
  color: black;
  font-size: 1.4rem !important;
  @media (max-width:750px) {
    font-size: 1.2rem !important;
      padding-top: 150px;

  }
  .h1 {
    margin: 40px;
    transform: rotate(3deg);
    padding: 5px;
    background: red;
    color: white;
  }
  .pdiv {
    transform: rotate(-1deg);
    background: black;
    color: white;
    font-weight: 600;
    padding: 20px;
  }
}
</style>
