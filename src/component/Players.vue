<!-- PlayerCard.vue -->

<template>
  <li class="player-card">
    <p>Name: {{ player.name }}</p>
    <p>In-Game Name: {{ player.ingame_name }}</p>
    <p>Rank: {{ player.rank }}</p>
    <p>Role: {{ player.role }}</p>
    <p>Team: {{ player.team_name }}</p>
  </li>
</template>

<script setup>
const props = defineProps(['player']);
</script>

<style scoped>
/* Add your styling for the PlayerCard here */

.player-card {
  list-style-type: none;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  width: 200px;
  box-sizing: border-box; /* Include padding and border in the box sizing */
}
</style>
