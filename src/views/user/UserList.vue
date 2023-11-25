<template>
  <div>
    <div>
      <user-card
        v-for="user in allUsers"
        :key="user.id"
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { User } from '@/types/user'
import { useUserService } from '@/service/user.service'
import UserCard from '@/components/UserCard.vue'

const userService = useUserService('https://jsonplaceholder.typicode.com')
const allUsers = ref<User[]>([])
onMounted(async () => {
  allUsers.value = await userService.getAllUsers()
})
</script>

<style scoped></style>
