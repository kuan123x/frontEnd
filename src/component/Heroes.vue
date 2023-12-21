

<template>
    <li class="hero-card">
      <p>User {{ hero.player.ingame_name }}</p>
      <p>Hero {{ hero.hero_name }}</p>
      <p>Type {{ hero.hero_type }}</p>
    </li>
  </template>
  
  <script setup>
  const props = defineProps(['hero']);
  </script>
  
  <style scoped>
  /* Add your styling for the heroCard here */
  
  .hero-card {
    list-style-type: none;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    width: 200px;
    box-sizing: border-box; /* Include padding and border in the box sizing */
  }
  </style>
  