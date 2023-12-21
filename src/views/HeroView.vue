<template>
    <div class="he">

      <div class="table-heroes">
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Used by (Player's IGN)</th>
              <th>Hero</th>
              <th>Type </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="hero in heroes" :key="hero.id">
              <td>{{ hero.player.ingame_name }}</td>
              <td>{{ hero.hero_name }}</td>
              <td>{{ hero.hero_type }}</td>

              <td>
                <button @click="deleteHero(hero.id)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <style>
  .he {
    margin: 3.5rem 4rem;
  }
  
  .perin h1 {
    font-size: 45px;
    margin-left: 2px;
    font-weight: 1000;
    letter-spacing: -2px;
    font-family: 'Cavilant';
  }
  
  .perin {
    border-bottom: 1px solid #21b3d7; /* Pink border */
    padding-bottom: 10px;
    display: flex;
  }
  
  .table-heroes {
    margin-top: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    border-radius: 10px;
  }
  
  th, td {
    border: 1px solid #16bdaa; /* Pink border */
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #1982bf; /* Pink background for header */
    color: white; /* White text for header */
  }
  
  .cust {
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
    background-color: #dc0b1f; /* Bootstrap red color */
    color: #ffffff;
    border-radius: 5px;
    padding: 5px 10px;
  }
  </style>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const heroes = ref(null);
  
  onMounted(() => {
    fetch('http://localhost:8000/api/heroes')
      .then(response => response.json().then(data => (heroes.value = data)));

      fetch('http://localhost:8000/api/players')
      .then(response => response.json().then(data => (players.value = data)));
  });
  
  const deleteHero = async (heroId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/heroes/${heroId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        heroes.value = heroes.value.filter((hero) => hero.id !== heroId);
        alert('hero deleted successfully!');
      } else {
        console.error('Failed to delete hero:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting hero:', error);
    }
  };
  </script>
  
  