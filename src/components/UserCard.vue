<template>
  <div class = "userCard">
    <div>id :{{ props.id }}</div> 
    <div>name: {{props.name}}</div>
    <div>username: {{ props.username }} 
        email: {{ props.email }} <br>
        address: {{props.address}} <br>
        phone: {{ props.phone }}
        website: {{ props.website }} <br>
        company: {{ props.company }}
    </div>   
    <router-link :to = "{name:'user' , params : {id:props.id}}">{{ props.name }}</router-link>
  </div>
</template>
<script  lang="ts">
interface Props {
  id:number;
  name : string;
  username: string;
  email: string;
  address: Object;
  phone: string;
  website: string;
  company: Object;
}
</script>

<script setup lang="ts">
const props = defineProps<Props>();

</script>

<style scoped>
  .userCard{
    border: brown solid 2px;
    margin-top: 2px;
  }
</style>