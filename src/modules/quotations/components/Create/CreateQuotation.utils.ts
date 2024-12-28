import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "@/config/envs.ts";
import { API_VERSION } from "@/modules/shared/constants/api-version.ts";

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

export type Customer = {
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
};

export type CartItem = {
  productId: number;
  name: string;
  quantity: number;
  price: string;
  total: string;
};

export const useCreateQuotationUtils = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<number | null>(null);
  const [total, setTotal] = useState<string>("0");

  const { register, handleSubmit, control, reset } = useForm();

  useEffect(() => {
    fetchProducts();
    fetchCustomers();
  }, []);

  const fetchProducts = async () => {
    try {
      const endpoint = [API_URL, API_VERSION.v1, "products"].join("/");
      const response = await fetch(endpoint);
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCustomers = async () => {
    try {
      const endpoint = [API_URL, API_VERSION.v1, "customers"].join("/");
      const response = await fetch(endpoint);
      const data = await response.json();
      setCustomers(data.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addToCart = (data: any) => {
    const product = products.find((p) => p.id === parseInt(data.productId));
    if (product) {
      const newItem: CartItem = {
        productId: product.id,
        name: product.name,
        quantity: parseInt(data.quantity),
        price: product.sellingPrice,
        total: (
          parseFloat(product.sellingPrice) * parseInt(data.quantity)
        ).toFixed(2),
      };
      setCart([...cart, newItem]);
      calculateTotal([...cart, newItem]);
    }
    reset({ productId: "", quantity: "" });
  };

  const calculateTotal = (cartItems: CartItem[]) => {
    const newTotal = cartItems
      .reduce((sum, item) => sum + parseFloat(item.total), 0)
      .toFixed(2);
    setTotal(newTotal);
  };

  const removeFromCart = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    calculateTotal(newCart);
  };

  const submitSale = async () => {
    if (!selectedCustomer) {
      alert("Please select a customer");
      return;
    }

    const saleData = {
      header: {
        customerId: selectedCustomer,
        userId: 1, // Assuming a fixed user ID for now
        total: total,
      },
      detail: cart.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        total: item.total,
      })),
    };

    try {
      const response = await fetch("/v1/sell", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saleData),
      });

      if (response.ok) {
        alert("Sale submitted successfully");
        setCart([]);
        setTotal("0");
        setSelectedCustomer(null);
      } else {
        alert("Error submitting sale");
      }
    } catch (error) {
      console.error("Error submitting sale:", error);
      alert("Error submitting sale");
    }
  };

  return {
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
  };
};
