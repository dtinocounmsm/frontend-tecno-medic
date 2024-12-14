import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { customerSchema } from "../../schemas/customerSchema";
import { API_URL } from "@/config/envs";
import { API_VERSION } from "@/modules/shared/constants/api-version";
import { toast } from "sonner";

export type CustomerFormData = {
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

export const useCustomerRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CustomerFormData>({
    resolver: yupResolver(customerSchema),
    defaultValues: {
      name: "",
      firstSurname: "",
      secondSurname: "",
      documentType: "",
      documentNumber: "",
      email: "",
      address: "",
      countryCode: "+51",
      phone: "",
      mobile: "",
      birthdate: "",
      gender: "F",
      active: true,
    },
  });

  const onSubmit = async (data: CustomerFormData) => {
    setIsSubmitting(true);
    try {
      const endpoint = [API_URL, API_VERSION.v1, "customers"].join("/");
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el cliente");
      }

      const result = await response.json();
      console.log("Cliente registrado:", result);
      form.reset();
      toast.success("Usuario registrado correctamente", {
        position: "top-right",
      });
    } catch (error) {
      console.error("Error al registrar cliente", error);
      toast.error("Error al registrar cliente", { position: "top-right" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, isSubmitting, onSubmit };
};
