import { onMounted, ref, computed} from "vue";
import { defineStore } from "pinia";
import {useUserService  } from "@/service/user.service";
import type { User } from "@/types/user";


export const useUserStore = defineStore('User',()=>{
  // const name = ref<string>('');
  // const localName = ref<string>('');
  // const name = computed(() => localName.value);
  const name = computed<string>(() => {
    if(user.value){
      return user.value.name;
    }
    return '';
  });
  const user = ref<User| null>(null);
  const userId = ref<string>('');
  const userService = useUserService("https://jsonplaceholder.typicode.com/");

  // watch(userId,async (val: string) => {
  //   const user = await userService.getUser(Number(val));
  //   name.value = user.name
  // })
  onMounted(() => {
    const id= localStorage.getItem('id');
    if(id){
      userId.value = id;
      authUser();
    }
  })
  const authUser =async () => {
    localStorage.setItem("id", userId.value)
    try {
      user.value = await userService.getUser(Number(userId.value));      
    } catch {
      user.value = null;
    }
    // localName.value = user.name    
  }
  
  return {name, userId , authUser};
})