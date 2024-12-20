import { API_URL } from "@/config/envs";
import { API_VERSION } from "@/modules/shared/constants/api-version";
import { useEffect, useState } from "react";

export type Product = {
  id: number;
  name: string;
  description: string;
  purchasePrice: string;
  sellingPrice: string;
  imageUrl: string;
  stock: number;
  active: boolean;
};

export const useProductListUtils = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Nombre" },
    { key: "purchasePrice", label: "Precio de Compra" },
    { key: "sellingPrice", label: "Precio de Venta" },
    { key: "stock", label: "Stock" },
    { key: "active", label: "Activo" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const endpoint = [API_URL, API_VERSION.v1, "products"].join("/");
        const response = await fetch(endpoint);
        const { data } = await response.json();
        setProducts(data ?? []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return { columns, products };
};
