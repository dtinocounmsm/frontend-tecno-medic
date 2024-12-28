"use client";

import { Button } from "@/components/ui/button.tsx";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";

import { useRegistrationUtils } from "./registration-utils.ts";

export const UserRegistration = () => {
  const { form, onSubmit } = useRegistrationUtils();
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombres</FormLabel>
                <FormControl>
                  <Input
                    data-testid="firstName"
                    placeholder="Juan Carlos"
                    {...field}
                  />
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
            name="firstSurname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido Paterno</FormLabel>
                <FormControl>
                  <Input
                    data-testid="firstSurname"
                    placeholder="García"
                    {...field}
                  />
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
            name="secondSurname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido Materno</FormLabel>
                <FormControl>
                  <Input
                    data-testid="secondSurname"
                    placeholder="López"
                    {...field}
                  />
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
            name="birthdate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha de Nacimiento</FormLabel>
                <FormControl>
                  <Input data-testid="birthdate" type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            rules={{ required: "La fecha de nacimiento es requerida" }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo Electrónico</FormLabel>
                <FormControl>
                  <Input
                    data-testid="email"
                    placeholder="juan@ejemplo.com"
                    {...field}
                  />
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
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono Móvil</FormLabel>
                <FormControl>
                  <Input
                    data-testid="mobile"
                    placeholder="123456789"
                    {...field}
                  />
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
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sexo</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  data-testid="gender"
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione una opción" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="M">Masculino</SelectItem>
                    <SelectItem value="F">Femenino</SelectItem>
                    <SelectItem value="O">Otro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
            rules={{ required: "Por favor seleccione una opción" }}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dirección</FormLabel>
                <FormControl>
                  <Input
                    data-testid="address"
                    placeholder="Calle 123, Ciudad, País"
                    {...field}
                  />
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
          <Button type="submit" data-testid="sign-up">
            Crear Usuario
          </Button>
        </form>
      </Form>
    </div>
  );
};
