import axios  from "axios";
import type { User } from "@/types/user";

// https://jsonplaceholder.typicode.com/users

export const useUserService = (url: string) =>{

  const getAllUsers =async (): Promise<User[]>=> {
    const dataUsers = await axios.get(`${url}/users`);
    return dataUsers.data as User[];
  }

  const getUser =async (id: number): Promise<User>=> {
    const dataUsers = await axios.get(`${url}/users/${id}`);
    return dataUsers.data as User;
  }

return {getAllUsers , getUser};
}







