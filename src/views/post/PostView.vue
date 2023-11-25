<template>
  <div>
    <div v-if="post === null">
      <h2>Пост не найден</h2>
    </div>
    <div v-else-if="!post">Loading</div>
    <post-card
      v-else
      :key="postId"
      :post="post"
    ></post-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

import { usePostService } from '@/service/post.service';

import type { Post } from '@/types/posts';

import PostCard from '@/components/PostCard.vue'

const props = defineProps<{
  id: string;
}>();

const postId = computed<number>(() => Number(props.id));

const postService = usePostService('https://jsonplaceholder.typicode.com/');

const post = ref<Post | null>();

onMounted(async () => {
  if (postId.value > 0) {
    try {
      post.value = await postService.getPost(postId.value);
    } catch {
      post.value = null;
    }
  }
});
</script>

<style scoped>

</style>