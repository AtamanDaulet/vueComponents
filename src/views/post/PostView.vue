<template>
  <div v-if="postInfo === null">
      <h2>Пост не найден</h2>
    </div>
    <div v-else-if="!postInfo">Loading</div>
    <post-card
      v-else
      :key="postId"
      :post="postInfo"
    ></post-card>
  <!-- <div v-if="post = id">
    <h3>post id does not exist</h3>
  </div>
  <div>
    Its post Card . Id is {{ postInfo }}
  </div> -->
</template>

<script setup lang="ts">
import { ref, computed , onMounted} from 'vue';
import {usePostService} from '@/service/post.service'
import type {Post } from '@/types/posts'
import PostCard from '@/components/PostCard.vue'

const props = defineProps<{
  id: string;
}>();

const postId = computed<number>(()=> Number(props.id));
const postService = usePostService("https://jsonplaceholder.typicode.com/")
const postInfo = ref<Post| null>();

onMounted(async () => {
  if (postId.value > 0) {
    try {
      postInfo.value = await postService.getPost(postId.value);
    } catch {
      postInfo.value = null;
    }
  }
});
</script>

<style scoped>

</style>