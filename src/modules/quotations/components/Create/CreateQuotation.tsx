"use client";

import {  Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { useCreateQuotationUtils } from "@/modules/quotations/components/Create/CreateQuotation.utils.ts";
import { PlusCircle, SaveIcon, Trash2Icon } from "lucide-react";

export function CreateQuotation() {
  const {
    products,
    customers,
    cart,
    total,
    selectedCustomer,
    setSelectedCustomer,
    register,
    handleSubmit,
    control,
    addToCart,
    removeFromCart,
    submitSale,
  } = useCreateQuotationUtils();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Crear Cotización</h1>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Cliente</CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            onValueChange={(value) => setSelectedCustomer(parseInt(value))}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Elija un cliente" />
            </SelectTrigger>
            <SelectContent>
              {customers.map((customer) => (
                <SelectItem key={customer.id} value={customer.id.toString()}>
                  {`${customer.name} ${customer.firstSurname} ${customer.secondSurname}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Producto</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(addToCart)} className="flex gap-4">
            <div className="flex-auto">
              <Controller
                name="productId"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Elija un producto" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem
                          key={product.id}
                          value={product.id.toString()}
                        >
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div>
              <Input
                type="number"
                placeholder="Cantidad"
                {...register("quantity", { required: true, min: 1 })}
              />
            </div>
            <Button type="submit">
              <PlusCircle />
              Agregar
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Cotización</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Producto</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Total</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.total}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      onClick={() => removeFromCart(index)}
                      size="icon"
                    >
                      <Trash2Icon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-xl font-bold">Total: S/ {total}</div>
          <Button
            onClick={submitSale}
            disabled={cart.length === 0 || !selectedCustomer}
          >
            <SaveIcon />
            Guardar Cotización
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
