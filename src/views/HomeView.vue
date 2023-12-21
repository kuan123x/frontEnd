<template>
  <div class="image-container">
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
.image-container {
  background-image: url('https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/331205874_1271963997069993_2154723314809755192_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGrFQfIY8ZQ9xu4Tw_ACJ6-Qq0G7Qp0zo5CrQbtCnTOjq8Mk8YDXjq11SG4ZE9r9LUtIR03mIaMfZlaOtxcs3_X&_nc_ohc=iikb0uOt6d8AX8z93vP&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfAX2MNGwm9oaBKkqoJn4khfUzvoTVcd-Mx7ljkzywueZg&oe=6587EFC8');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

</style>
