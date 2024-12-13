"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useRegistrationUtils } from "./registration-utils";

export const UserRegistration = () => {
  const { form, onSubmit } = useRegistrationUtils();
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="nombres"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombres</FormLabel>
                <FormControl>
                  <Input placeholder="Juan Carlos" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            rules={{
              required: "Los nombres son requeridos",
              minLength: {
                value: 2,
                message: "Los nombres deben tener al menos 2 caracteres",
              },
            }}
          />
          <FormField
            control={form.control}
            name="apellidoPaterno"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido Paterno</FormLabel>
                <FormControl>
                  <Input placeholder="García" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            rules={{
              required: "El apellido paterno es requerido",
              minLength: {
                value: 2,
                message: "El apellido paterno debe tener al menos 2 caracteres",
              },
            }}
          />
          <FormField
            control={form.control}
            name="apellidoMaterno"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido Materno</FormLabel>
                <FormControl>
                  <Input placeholder="López" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            rules={{
              required: "El apellido materno es requerido",
              minLength: {
                value: 2,
                message: "El apellido materno debe tener al menos 2 caracteres",
              },
            }}
          />
          <FormField
            control={form.control}
            name="fechaNacimiento"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha de Nacimiento</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            rules={{ required: "La fecha de nacimiento es requerida" }}
          />
          <FormField
            control={form.control}
            name="correo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo Electrónico</FormLabel>
                <FormControl>
                  <Input placeholder="juan@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            rules={{
              required: "El correo electrónico es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Correo electrónico inválido",
              },
            }}
          />
          <FormField
            control={form.control}
            name="telefonoMovil"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono Móvil</FormLabel>
                <FormControl>
                  <Input placeholder="123456789" {...field} />
                </FormControl>
                <FormDescription>
                  Ingrese un número de 9 dígitos sin espacios ni guiones.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
            rules={{
              required: "El teléfono móvil es requerido",
              pattern: {
                value: /^[0-9]{9}$/,
                message: "El teléfono móvil debe tener 9 dígitos",
              },
            }}
          />
          <FormField
            control={form.control}
            name="sexo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sexo</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione una opción" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="femenino">Femenino</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
            rules={{ required: "Por favor seleccione una opción" }}
          />
          <FormField
            control={form.control}
            name="direccion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dirección</FormLabel>
                <FormControl>
                  <Input placeholder="Calle 123, Ciudad, País" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            rules={{
              required: "La dirección es requerida",
              minLength: {
                value: 5,
                message: "La dirección debe tener al menos 5 caracteres",
              },
            }}
          />
          <Button type="submit">Crear Usuario</Button>
        </form>
      </Form>
    </div>
  );
};
