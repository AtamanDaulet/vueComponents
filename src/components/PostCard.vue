<template>
  <div class="card">
    <p>Id: {{props.id}}</p>
      <h3>Title: {{props.title}}</h3>
      <p>Body: {{props.body}}</p>
      <button @click="emits('delete')">Delete</button>
  </div>
</template>

<script setup lang="ts">
//   interface Props{
//     body: string;
//     title: string;
//     id:number;
//     userId?: number;
// }

const props = defineProps<{
    body: string;
    title: string;
    id:number;    
}>();

const emits = defineEmits<{
  (e:"delete"): void;
}>();

</script>

<style scoped>
  .card{
    border: teal solid 2px;
    margin-top: 4px;
  }
</style>