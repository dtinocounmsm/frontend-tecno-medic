import { useEffect, useState } from "react";
import { User } from "../typings/user";
import { API_URL } from "@/config/envs";
import { API_VERSION } from "@/modules/shared/constants/api-version";
import { toast } from "sonner";

export const useUsersUtils = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    const endpoint = [API_URL, API_VERSION.v1, "users"].join("/");
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.results || [];
  };

  const deleteUser = async (id: number) => {
    const endpoint = [API_URL, API_VERSION.v1, "users", id].join("/");
    await fetch(endpoint, { method: "DELETE" });
    toast.success("Usuario eliminado correctamente", { position: "top-right" });
    fetchUsers();
  };

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { deleteUser, users };
};
