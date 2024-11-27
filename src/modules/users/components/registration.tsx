"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface IFormInput {
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  fechaNacimiento: Date;
  correo: string;
  telefonoMovil: string;
  sexo: "masculino" | "femenino" | "otro";
  direccion: string;
}

export const UserRegistration = () => {
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

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
  };

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
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={`w-[240px] pl-3 text-left font-normal ${
                          !field.value && "text-muted-foreground"
                        }`}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Seleccione una fecha</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
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
