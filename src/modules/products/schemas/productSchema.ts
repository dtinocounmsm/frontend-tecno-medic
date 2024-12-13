import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required("El nombre es requerido"),
  description: yup.string(),
  purchasePrice: yup
    .number()
    .typeError("El precio de compra debe ser un número")
    .positive("El precio de compra debe ser positivo")
    .required("El precio de compra es requerido"),
  sellingPrice: yup
    .number()
    .typeError("El precio de venta debe ser un número")
    .positive("El precio de venta debe ser positivo")
    .required("El precio de venta es requerido"),
  imageUrl: yup
    .string()
    .url("Debe ser una URL válida")
    .required("La URL de la imagen es requerida"),
  stock: yup
    .number()
    .integer("El stock debe ser un número entero")
    .min(0, "El stock no puede ser negativo")
    .required("El stock es requerido"),
  active: yup.boolean().required("El estado activo es requerido"),
});
