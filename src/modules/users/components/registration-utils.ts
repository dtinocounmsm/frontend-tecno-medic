import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "../typings/user";
import { API_URL } from "@/config/envs";
import { API_VERSION } from "@/modules/shared/constants/api-version";

export interface IFormInput {
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  fechaNacimiento: string;
  correo: string;
  telefonoMovil: string;
  sexo: "masculino" | "femenino" | "otro";
  direccion: string;
}

export const useRegistrationUtils = () => {
  const form = useForm<IFormInput>({
    defaultValues: {
      nombres: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      correo: "",
      telefonoMovil: "",
      direccion: "",
    },
  });

  const saveUser = async (user: Omit<User, "id">) => {
    const endpoint = [API_URL, API_VERSION.v1, "users"].join("/");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, password: "123456" }),
    });

    if (!response.ok) {
      throw new Error("Failed to save user.");
    }

    return response.json();
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // parse IFormInput to User
    const user: Omit<User, "id"> = {
      name: data.nombres,
      firstSurname: data.apellidoPaterno,
      secondSurname: data.apellidoMaterno,
      email: data.correo,
      phone: data.telefonoMovil,
      address: data.direccion,
      birthdate: "1990-01-01",
      countryCode: "PE",
      gender: "M",
      profileId: 1,
      active: false,
    };
    await saveUser(user);
    form.reset();
  };

  return {
    form,
    onSubmit,
    saveUser,
  };
};
