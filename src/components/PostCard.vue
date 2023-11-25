<template>
  <div class="card">
    <p>Id: {{ props.post.id }}</p>
    <router-link :to="{ name: 'post', params: { id: props.post.id } }">
      <h3>Title: {{ props.post.title }}</h3>
    </router-link>
    <p>Body: {{ props.post.body }}</p>
    <button @click="emits('delete')">Delete</button>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/types/posts';

const props = defineProps<{
  post: Post
}>()

const emits = defineEmits<{
  (e: 'delete'): void
}>()
</script>

<style scoped>
.card {
  border: teal solid 2px;
  margin-top: 4px;
}
</style>
