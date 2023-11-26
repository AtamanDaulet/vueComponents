import axios from "axios";
import type { Post } from "@/types/posts";

// api Post from https://jsonplaceholder.typicode.com/
export const usePostService = (url: string) => {

  const getAllPost = async (): Promise<Post[]> => {
    const result = await axios.get(`${url}/posts`)
    return result.data as Post[];
  }
  
  const getPost = async (id:number): Promise<Post> => {
    const result = await axios.get(`${url}/posts/${id}`)
    return result.data as Post;
  }

  const deletePost = async (id: number) => {
    console.log('delete');
    return await axios.delete(`${url}/posts/${id}`);
  }

  return { getAllPost, getPost, deletePost };
}