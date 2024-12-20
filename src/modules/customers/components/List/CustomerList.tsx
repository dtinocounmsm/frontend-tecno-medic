"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { API_URL } from "@/config/envs";
import { API_VERSION } from "@/modules/shared/constants/api-version";

interface Customer {
  id: number;
  name: string;
  firstSurname: string;
  secondSurname: string;
  documentType: string;
  documentNumber: string;
  email: string;
  address: string;
  countryCode: string;
  phone: string;
  mobile: string;
  birthdate: string;
  gender: "M" | "F";
  active: boolean;
}

export function CustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const endpoint = [API_URL, API_VERSION.v1, "customers"].join("/");
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch customers");
        }
        const { data } = await response.json();
        setCustomers(data ?? []);
      } catch (err) {
        setError("Error fetching customers. Please try again later.");
        console.error("Error fetching customers:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (isLoading) {
    return <div className="text-center p-4">Loading customers...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Lista de Clientes</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre Completo</TableHead>
              <TableHead>Documento</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Teléfono</TableHead>
              <TableHead>Género</TableHead>
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{`${customer.name} ${customer.firstSurname} ${customer.secondSurname}`}</TableCell>
                <TableCell>{`${customer.documentType}: ${customer.documentNumber}`}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{`${customer.countryCode} ${
                  customer.mobile || customer.phone
                }`}</TableCell>
                <TableCell>
                  {customer.gender === "M" ? "Masculino" : "Femenino"}
                </TableCell>
                <TableCell>
                  <Badge variant={customer.active ? "default" : "destructive"}>
                    {customer.active ? "Activo" : "Inactivo"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
