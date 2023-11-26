import { defineStore } from "pinia";
import type { Post } from '@/types/posts';
import { usePostService } from '@/service/post.service';
import { ref} from 'vue';

export const usePostStore = defineStore('Post',()=>{
  const postService = usePostService('https://jsonplaceholder.typicode.com/');
  const post = ref<Post | null>();

  const loadPost = async (postId: number) => {
    if (postId > 0) {
      try {
        post.value = await postService.getPost(postId);
      } catch {
        post.value = null;
      }
    }
  };

  return {loadPost, post};
});