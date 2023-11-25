<template>
  <div>
    <router-link :to="{ name: 'posts' }">Посты</router-link>
    <router-link :to="{ name: 'Users' }">Пользователи</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>