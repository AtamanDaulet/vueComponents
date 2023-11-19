<template>
  <div>
    <!-- <button @click="postService.getAllPost()">Get data</button> -->
    <!-- {{ postsFromGet }} -->
    <div>
      <user-card v-for="user in allUsers" :key="user.id"
      :id="user.id"
      :name="user.name"
      :username="user.username"
      :email="user.email"
      :address="user.address"
      :phone="user.phone"
      :website="user.website"
      :company="user.company"      
      ></user-card>
    </div>
    <div  >
      <post-card 
       @delete = "deletePost(post.id)"
        v-for="post in postsFromGet" 
          :key="post.id" 
          :id = "post.id"
          :body="post.body" 
          :title = post.title       
      ></post-card>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { usePostService } from '@/service/post.service';
  import type {Post} from "@/types/posts";
  import PostCard from "./components/PostCard.vue"
  import type { User } from "./types/user";
  import { useUserService } from "./service/user.service";
  import UserCard from "./components/UserCard.vue";

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
  //****************************** */
  
  const userService = useUserService("https://jsonplaceholder.typicode.com");
  const allUsers = ref<User[]>([]);
  onMounted(async()=>{
    allUsers.value = await userService.getAllUsers();
  });
  


</script>

<style scoped>

  
</style>