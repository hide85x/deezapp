<template>
  <div class="container">
    <div v-if="loggedUser" class="login-container">
      <div id="output"></div>
      <div class="avatar">
        <img class="img avatar" :src="loggedUser.photoURL" alt="pic" />
      </div>
      <div class="form-box">
        <h3>Welcome home</h3>
        <p>{{ loggedUser.email }}</p>
      </div>
    </div>
    <div v-if="!loggedUser" class="form-box login-container">
      <div class="loader">
        <pulse-loader
          :loading="isLoading"
          color="black"
          width="100%"
        ></pulse-loader>
        <p v-if="isLoading">please wait...</p>
      </div>
      <h4 v-if="!isLoading">Log Your ass with google</h4>
      <button
        v-if="!isLoading"
        class="btn login"
        style="width: 200px; margin: auto"
        @click="login"
      >
        login with Google
      </button>
      <h3>or</h3>
    </div>
    <SignIn/>
    <button
      v-if="loggedUser"
      class="btn logout"
      style="width: 200px; margin: auto"
      @click="logout"
    >
      logout
    </button>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import { useLoadUsers } from "@/firebase";
import firebase from "firebase";

import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import { defineComponent, reactive, ref, computed } from "vue";

import store from "../store/index";

import { User } from "../interfaces/interface";
import SignIn from '@/components/SignIn.vue'
export default defineComponent({
  components: { PulseLoader, SignIn },
 
    setup() {
    let isLoading = ref(false);
    let loggedUser = ref(store.getters.getUser);
    const users: any = useLoadUsers();
    const login = () => {
      isLoading.value = true;
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result: any) => {
          let token = result.credential.accessToken;
          let user = result.user;
          store.methods.logNewUser(user);
          isLoading.value = false;
        })
        .catch((error) => {
          console.log(error);
          let errorCode = error.code;
          let errorMessage = error.message;
          let email = error.email;
          let credential = error.credential;
        });
    };
    const logout = () => store.methods.logout();

    return { loggedUser, login, logout, users, isLoading };
  },
});
</script>

<style lang="scss" >
.loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.btn {
  margin: 20px auto !important;
  transform: rotate(-5deg);
  border: none;
  min-height: 40px;
  color: black;
  background: red;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
    background: black;
    color: red;
  }
}
.login {
  background: black;
  color: red;
  border: 2px solid transparent;

  &:hover {
    background: red;
    color: black;
    border: 2px solid black;
  }
}
img .avatar{
  border-radius: 100%;
}
.container {
  padding-top: 30vh;
}
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 300px;
  height: 230px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background: red;
  color: black;
}

#output {
  position: absolute;
  width: 300px;
  top: -75px;
  left: 0;
  color: #fff;
}

#output.alert-success {
  background: rgb(25, 204, 25);
}

#output.alert-danger {
  background: rgb(228, 105, 105);
}

.login-container::before,
.login-container::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 3.5px;
  left: 0;
  background: rgb(0, 0, 0);
  z-index: -1;
  -webkit-transform: rotateZ(4deg);
  -moz-transform: rotateZ(4deg);
  -ms-transform: rotateZ(4deg);
  border: none;
}

.login-container::after {
  top: 5px;
  z-index: -2;
  -webkit-transform: rotateZ(-2deg);
  -moz-transform: rotateZ(-2deg);
  -ms-transform: rotateZ(-2deg);
}

.avatar {
  width: 100px;
  height: 100px;
  margin: 10px auto 30px;
  border-radius: 100%;
  border: 2px solid #aaa;
  background-size: cover;
}

.form-box input {
  width: 100%;
  padding: 10px;
  text-align: center;
  height: 40px;
  border: 1px solid #ccc;
  background: #fafafa;
  transition: 0.2s ease-in-out;
}

.form-box input:focus {
  outline: 0;
  background: #eee;
}

.form-box input[type="text"] {
  border-radius: 5px 5px 0 0;
  text-transform: lowercase;
}

.form-box input[type="password"] {
  border-radius: 0 0 5px 5px;
  border-top: 0;
}

.form-box button.login {
  margin-top: 15px;
  padding: 10px 20px;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
</style>