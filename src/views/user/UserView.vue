<template>
  <div>
    {{ user }}
  </div>
</template>

<script setup lang="ts">
import {ref, computed, onMounted} from 'vue';
import {useUserService} from '@/service/user.service';
import type {User} from '@/types/user.ts';

const props = defineProps<{
  id: string;
}>();
const userId = computed<number>(()=> Number(props.id));
const userData = useUserService("https://jsonplaceholder.typicode.com");
const user = ref<User>();

onMounted( async()=>{
  if(userId.value > 0){
    user.value = await userData.getUser(userId.value);
  }
})
</script>

<style scoped>

</style>