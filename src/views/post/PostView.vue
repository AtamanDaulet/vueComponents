<template>
  <div v-if="post === null">
    <h2>Пост не найден</h2>
  </div>
  <div v-else-if="!post">Loading</div>
  <post-card v-else :key="postId" :post="post"></post-card>
  <!-- <div v-if="post = id">
    <h3>post id does not exist</h3>
  </div>
  <div>
    Its post Card . Id is {{ postInfo }}
  </div> -->
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { storeToRefs } from "pinia";
import PostCard from '@/components/PostCard.vue';
import { usePostStore } from '@/stores/PostStore';

const props = defineProps<{
  id: string;
}>();

const postId = computed<number>(() => Number(props.id));
const  postStore = usePostStore();
const  {post} = storeToRefs(postStore);

onMounted( () => postStore.loadPost(postId.value));
</script>

<style scoped></style>
