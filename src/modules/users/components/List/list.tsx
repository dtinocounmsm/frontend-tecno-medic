import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import { useUsersUtils } from "./list-utils.ts";
import { Loader } from "@/components/loader.tsx";
import { Button } from "@/components/ui/button.tsx";
import { PencilIcon, PlusCircle, SearchIcon } from "lucide-react";
import { ConfirmationDialog } from "./confirmation-dialog.tsx";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input.tsx";

export const UserList = () => {
  const { deleteUser, users } = useUsersUtils();

  return (
    <>
      <div className="my-6 flex flex-col gap-4">
        <Link to={"/users/registration"}>
          <Button variant="outline"><PlusCircle />Nuevo usuario</Button>
        </Link>
        <div className="flex gap-4">
          <Input
              data-testid="input-search"
              placeholder="Buscar por nombres, apellidos, email"
          />
          <Button data-testid="button-search" variant="default"><SearchIcon />Buscar</Button>
        </div>

      </div>
      <Table className="w-full">
        <TableCaption>Lista de usuarios.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead className="w-[100px]">Email</TableHead>
            <TableHead>A. Paterno</TableHead>
            <TableHead>A. Materno</TableHead>
            <TableHead>Nombres</TableHead>
            <TableHead>Celular</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-bold">{user.id}</TableCell>
              <TableCell className="font-medium">{user.email}</TableCell>
              <TableCell>{user.firstSurname}</TableCell>
              <TableCell>{user.secondSurname}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell className="flex gap-2">
                <Button variant="outline" size="icon">
                  <PencilIcon size={16} />
                </Button>
                <ConfirmationDialog
                  onCancel={() => {
                    console.log("cancel");
                  }}
                  onConfirm={() => deleteUser(user.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Loader isLoading={users.length === 0} loadingText="Loading users..." />
    </>
  );
};
