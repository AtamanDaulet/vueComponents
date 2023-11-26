<template>
  <div>
    <h1>Main Page</h1>
    <div>
      <label for="user-id">Id:</label>
      <input id="user-id" type="text" v-model="userStore.userId">
      <input id="user-name" type="text" v-model="userStore.name">
      <button @click="userStore.authUser">Sing in</button>
    </div> 
    <!-- <input type="text" v-model="userStore.userId"> -->
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/UserStores";

const userStore = useUserStore();

</script>

<style scoped>

</style>