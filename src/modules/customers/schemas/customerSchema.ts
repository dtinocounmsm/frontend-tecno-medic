import * as yup from "yup";

export const customerSchema = yup.object().shape({
  name: yup.string().required("El nombre es requerido"),
  firstSurname: yup.string().required("El primer apellido es requerido"),
  secondSurname: yup.string().required("El segundo apellido es requerido"),
  documentType: yup.string().required("El tipo de documento es requerido"),
  documentNumber: yup.string().required("El número de documento es requerido"),
  email: yup
    .string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es requerido"),
  address: yup.string().required("La dirección es requerida"),
  countryCode: yup.string().required("El código de país es requerido"),
  phone: yup.string().required("El teléfono es requerido"),
  mobile: yup.string().required("El celular es requerido"),
  birthdate: yup.string().required("La fecha de nacimiento es requerida"),
  gender: yup
    .string()
    .oneOf(["M", "F"], "Género inválido")
    .required("El género es requerido"),
  active: yup.boolean().required("El estado activo es requerido"),
});
