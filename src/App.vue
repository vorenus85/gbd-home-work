<script setup>
import UsersList from './components/UsersList.vue';
</script>

<template>
  <UsersList/>
</template>
<style lang="scss">
#app{
  padding: 0 0 0 200px;
  background: url('@/assets/img/static_background.png') no-repeat left center;
  background-size: cover;
  min-height: 900px;
  height: 100vh;

  @media screen and (min-width: 1600px) {
    padding: 0 0 0 250px;
  }
}
</style>