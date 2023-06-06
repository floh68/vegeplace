<script setup lang="ts">
import pocketbase from "pocketbase";

// import vue refs
import { ref } from "vue";

// create refs for email, password and remember me
const email = ref("");
const password = ref("");
const rememberMe = ref(false);

// create a login function
async function login() {
  try {
    // authenticate the user with pocketbase
    const user = await pocketbase.auth().login(email.value, password.value);
    console.log(user);
    // redirect to a specific page after login
    window.location.href = "/account";
  } catch (error) {
    console.error(error);
    // show error message
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md px-4 py-8 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold text-center text-gray-800">Connexion</h1>
      <form class="mt-4" @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-600">Email</label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-600">Mot de passe</label>
          <input
            id="password"
            type="password"
            v-model="password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            required
          />
        </div>
        <div class="mb-4 flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              v-model="rememberMe"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-200"
            />
            <label for="remember_me" class="block ml-2 text-sm text-gray-800">Se souvenir de moi</label>
          </div>
          <a href="#" class="block text-sm font-medium text-indigo-600 hover:text-indigo-500">Mot de passe oublié ?</a>
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          Se connecter
        </button>
      </form>
      <p class="mt-4 text-sm text-center text-gray-600">
        Pas encore de compte ?
        <a href="#" class="text-indigo-600 hover:text-indigo-500">S'inscrire</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* add custom styles here */
</style>

