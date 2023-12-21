<template>
  <div class="pl">
    <!-- <div class="ayers">
      <h1 class="play">
        players
        <RouterLink to="/player" class="plus">+</RouterLink>
      </h1>
    </div> -->
    <div class="table-players">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Team</th>
            <th>Name</th>
            <th>IGN</th>
            <th>Rank</th>
            <th>Role</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in players" :key="player.id">
            <td>{{ player.team.team_name }}</td>
            <td>{{ player.name }}</td>
            <td>{{ player.ingame_name }}</td>
            <td>{{ player.rank }}</td>
            <td>{{ player.role }}</td>
            <td>
              <button @click="deletePlayer(player.id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.pl {
  margin: 3.5rem 4rem;
}

.ayers h1 {
  font-size: 45px;
  margin-left: 2px;
  font-weight: 1000;
  letter-spacing: -2px;
  font-family: 'Cavilant';
}

.ayers {
  border-bottom: 1px solid #0a15e2; /* Pink border */
  padding-bottom: 10px;
  display: flex;
}

.table-players {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border-radius: 10px;
}

th, td {
  border: 1px solid #0b30c5; /* Pink border */
  padding: 8px;
  text-align: left;
}

th {
  background-color: #1008e4; /* Pink background for header */
  color: white; /* White text for header */
}

.play {
  color: white; /* White color for h1 */
}

.plus {
  padding: 5px;
  color: #ff4081;
  background-color: white;
  border-radius: 5px;
  font-size: 15px;
  text-decoration: none;
}

.btn {
  background-color: #dc3545; /* Bootstrap red color */
  color: #ffffff;
  border-radius: 5px;
  padding: 5px 10px;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';

const players = ref([]);
const teams = ref([]);

onMounted(async () => {
  try {
    const playersResponse = await fetch('http://localhost:8000/api/players');
    const teamsResponse = await fetch('http://localhost:8000/api/teams');

    players.value = await playersResponse.json();
    teams.value = await teamsResponse.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const deletePlayer = async (player_id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/players/${player_id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      players.value = players.value.filter((player) => player.id !== player_id);
      alert('Player deleted successfully!');
    } else {
      console.error('Failed to delete player:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting player:', error);
  }
};
</script>

