import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface Quotation {
  id: string;
  nro: string;
  fecha: Date;
  monto: integer;
  cliente: string;
  estado: "nueva" | "cerrado" | "cancelado";
}

export const QuotationList = () => {
  const quotations = JSON.parse(
    localStorage.getItem("cotizaciones") || "[]"
  ) as Array<User>;

  return (
    <Table className="w-full">
      <TableCaption>A list of cotizaciones.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nro</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Monto</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {quotations.map((cot) => (
          <TableRow key={cot.id}>
            <TableCell className="font-medium">{cot.nro}</TableCell>
            <TableCell>{cot.fecha}</TableCell>
            <TableCell>{cot.monto}</TableCell>
            <TableCell>{cot.cliente}</TableCell>
            <TableCell>{cot.estado}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
