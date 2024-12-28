import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "../../typings/user.ts";
import { API_URL } from "@/config/envs.ts";
import { API_VERSION } from "@/modules/shared/constants/api-version.ts";
import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";

export enum Gender {
  MALE = "M",
  FEMALE = "F",
  OTHER = "O",
}

export const DEFAULT_PASSWORD = "123456";

export type FormInput = {
  name: string;
  firstSurname: string;
  secondSurname: string;
  birthdate: string;
  email: string;
  mobile: string;
  gender: Gender;
  address: string;
};

export const useRegistrationUtils = () => {
  // const navigate = useNavigate();
  const form = useForm<FormInput>({
    defaultValues: {
      name: "",
      firstSurname: "",
      secondSurname: "",
      email: "",
      mobile: "",
      address: "",
    },
  });

  const saveUser = async (user: Omit<User, "id">) => {
    const endpoint = [API_URL, API_VERSION.v1, "users"].join("/");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, password: DEFAULT_PASSWORD }),
    });

    if (!response.ok) {
      throw new Error("Failed to save user.");
    }

    return response.json();
  };

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const user: Omit<User, "id"> = {
      name: data.name,
      firstSurname: data.firstSurname,
      secondSurname: data.secondSurname,
      email: data.email,
      phone: data.mobile,
      address: data.address,
      birthdate: "1990-01-01",
      countryCode: "PE",
      gender: data.gender ?? Gender.OTHER,
      profileId: 1,
      active: false,
    };
    await saveUser(user);
    toast.success("Usuario creado correctamente", { position: "top-right" });
    // @todo: uncomment this line when the route is available
    // navigate("/users/list", { replace: true });
    form.reset();
  };

  return {
    form,
    onSubmit,
    saveUser,
  };
};
