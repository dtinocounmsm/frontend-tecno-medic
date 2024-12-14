"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useProductListUtils } from "./ProductList.utils";

const formatPrice = (price: string) => {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  }).format(parseFloat(price));
};

export function ProductList() {
  const { columns, products } = useProductListUtils();

  return (
    <div className="container mx-auto py-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Imagen</TableHead>
            {columns.map((column) => (
              <TableHead key={column.key}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={product.imageUrl} alt={product.name} />
                  <AvatarFallback>
                    {product.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{formatPrice(product.purchasePrice)}</TableCell>
              <TableCell>{formatPrice(product.sellingPrice)}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.active ? "Sí" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
