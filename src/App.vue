<template>
  <div>
    <router-link :to="{name:'posts'}">Posts</router-link>
    <router-link :to="{name:'users'}">Users</router-link>
    <p>{{ appUserStore.name }}</p>
    <router-view></router-view> 

  </div>
</template>

<script setup lang="ts">
  // import { ref, onMounted } from "vue";
  // import { usePostService } from '@/service/post.service';
  // import type {Post} from "@/types/posts";
  // import PostCard from "./components/PostCard.vue"
  // import type { User } from "./types/user";
  // import { useUserService } from "./service/user.service";
  // import UserCard from "./components/UserCard.vue";  
  //****************************** */
  import { useUserStore } from "@/stores/UserStores";

  const appUserStore = useUserStore();

</script>

<style scoped>

  
</style>