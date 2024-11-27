import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const UserList = () => {
  const users = JSON.parse(localStorage.getItem("users") || "[]") as [];

  return (
    <Table className="w-full">
      <TableCaption>A list of users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Email</TableHead>
          <TableHead>A. Paterno</TableHead>
          <TableHead>A. Materno</TableHead>
          <TableHead>Nombres</TableHead>
          <TableHead>Celular</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.correo}</TableCell>
            <TableCell>{user.apellidoPaterno}</TableCell>
            <TableCell>{user.apellidoMaterno}</TableCell>
            <TableCell>{user.nombres}</TableCell>
            <TableCell>{user.telefonoMovil}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
