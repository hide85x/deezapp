<template>
 <div class="register-container">

    <div  class="login-container">

      <h4 >You can register here</h4>
      <form @submit.prevent="register" class="form-box form" >
          <label for="email">email</label>
          <input type="text" name="email">
          <label for="password">password</label>
          <input type="password" name="password">
      <button
        class="btn login registerBtn"
        style="width: 200px; margin: auto"
       
      >
        register
      </button>
      </form>

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent ({
    setup () {
        

        return {}
    }
})
</script>

<style lang="scss" >
.register-container {
    padding-top:40px;
    margin: auto;
    h4 {
        padding-top: 20px;
        margin: 10px 0;
    }
    .registerBtn {
        transform: rotate(5deg);
        
    }
}
 .form {
     
 }
</style>