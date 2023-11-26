<template>
  <div class="card">
    <!-- <p>Id: {{props.id}}</p>
      <h3>Title: {{props.title}}</h3>
      <p>Body: {{props.body}}</p>
      <button @click="emits('delete')">Delete</button>
      <router-link :to="{name:'post' , params:{id: props.id}}">
        <h3>Title: {{ props.title }}</h3>
      </router-link> -->
      <p>Id: {{ props.post.id }}</p>
    <router-link :to="{ name: 'post', params: { id: props.post.id } }">
      <h3>Title: {{ props.post.title }}</h3>
    </router-link>
    <p>Body: {{ props.post.body }}</p>
    <button @click="emits('delete')">Delete</button>
  </div>
</template>

<script setup lang="ts">
//   interface Props{
//     body: string;
//     title: string;
//     id:number;
//     userId?: number;
// }
import type { Post } from '@/types/posts';
// const props = defineProps<{
//     body: string;
//     title: string;
//     id:number;    
// }>();

const props = defineProps<{
  post: Post
}>()
const emits = defineEmits<{
  (e:"delete"): void;
}>();

</script>

<style scoped>
  .card{
    border: teal solid 2px;
    margin-top: 4px;
  }
</style>