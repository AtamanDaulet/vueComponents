<template>
  <div>
      <!-- <button @click="postService.getAllPost()">Get data</button> -->
    <!-- {{ postsFromGet }} -->
    <div  >
      <post-card
        @delete="deletePost(post.id)"
        v-for="post in postsFromGet"
        :key="post.id"
        :post="post"
      ></post-card>
    </div>
  </div>
</template>

<script setup lang="ts">
 import { ref, onMounted } from "vue";
  import { usePostService } from '@/service/post.service';
  import type {Post} from "@/types/posts";
  import PostCard from "@/components/PostCard.vue"


  const postService = usePostService("https://jsonplaceholder.typicode.com");
  // postService.getAllPost();
  const postsFromGet = ref<Post[]>([]);
  onMounted( async () => {
    //  1 variant
    postsFromGet.value = await postService.getAllPost()
    // 2 variant
    // postService.getAllPost().then(res => postsFromGet.value = res);
    // console.log;

  });
  const deletePost = async (id:number) => {
    // await postService.deletePost(id);
    // postsFromGet.value = await postService.getAllPost();
    postsFromGet.value = postsFromGet.value.filter((post:Post) => post.id != id);
    console.log(`${id} deleted`);
  }
</script>

<style scoped>

</style>