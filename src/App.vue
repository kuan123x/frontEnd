<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex min-h-[100vh]">
  <div class="w-[320px] bg-gray-900 flex flex-col">
    <div class="heading p-8 bg-blue-900">
      <h1 class="glowing-text text-2xl text-center">
        Bohol PRISAA Tournament
      </h1>
    </div>

    <nav class="flex-1 flex flex-col justify-center items-stretched text-center gap-3 text-gray-400">
      <router-link to="/" class="bg-gray-800 py-4 hover:bg-gray-700 hover:text-white ">Home</router-link>
      <router-link to="/team" class="bg-gray-800 py-4 hover:bg-gray-700 hover:text-white ">Teams</router-link>
      <router-link to="/player" class="bg-gray-800 py-4 hover:bg-gray-700 hover:text-white ">Players</router-link>
      <router-link to="/hero" class="bg-gray-800 py-4 mb-4 hover:bg-gray-700 hover:text-white ">Heroes</router-link>
    </nav>

    <div class="p-8 pt-4 bg-gray-800 text-gray-500 text-center">
      Bohol's elite private schools are set to battle it out for the title of Mobile Legends champions. Join us for an esports spectacle as the strongest teams emerge, claiming the coveted spot as the top gaming force in Bohol's private school community. Don't miss the rise of legends! 🎮🏆
    </div>

  </div>
  <div class="main-content bg-gray-500 flex-1">
    <router-view></router-view>
  </div>
</div>

</template>

<style scoped>
@keyframes glow {
  0% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 1);
  }
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
}

.glowing-text {
  color: #ffffff; /* Set the text color to white */
  font-size: 2rem;
  animation: glow 2s infinite;
}

</style>
