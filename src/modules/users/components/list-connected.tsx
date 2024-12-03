import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUsersUtils } from "./list-utils";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";
import { ConfirmationDialog } from "./confirmation-dialog";

export const UserListConn = () => {
  const { deleteUser, users } = useUsersUtils();

  return (
    <>
      <Table className="w-full">
        <TableCaption>Lista de usuarios.</TableCaption>
        <TableHeader>
          <TableRow>
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
              <TableCell className="font-medium">{user.email}</TableCell>
              <TableCell>{user.firstSurname}</TableCell>
              <TableCell>{user.secondSurname}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell style={{ display: "flex", gap: "16px" }}>
                <Button variant="secondary" size="sm">
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
