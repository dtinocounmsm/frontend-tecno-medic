import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { API_URL } from "@/config/envs";
import { API_VERSION } from "@/modules/shared/constants/api-version";
import { toast } from "sonner";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup.string().email("Correo inválido").required("Correo es requerido"),
  password: yup.string().required("Contraseña es requerida"),
});

export type LoginPayload = {
  email: string;
  password: string;
};

export const useLoginUtils = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginPayload) => {
    console.log(data);
    const endpoint = [API_URL, API_VERSION.v1, "auth", "login"].join("/");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    if (!response.ok) {
      setShowErrorMessage(true);
      throw new Error("Failed to login.");
    }
    if (response.status === 401) {
      setShowErrorMessage(true);
      throw new Error("Invalid credentials.");
    }
    if (!result.data) {
      setShowErrorMessage(true);
      toast.warning("Usuario o Contraseña incorrectos", {
        position: "top-right",
      });
      return;
    }
    setShowErrorMessage(false);
    navigate("/users/list");
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    showErrorMessage,
  };
};
