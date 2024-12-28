import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useLoginUtils } from "./login.utils";
import { Link } from "react-router-dom";

export function LoginPage() {
  const { register, handleSubmit, errors, onSubmit, showErrorMessage } =
    useLoginUtils();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Iniciar Sesión</CardTitle>
          <CardDescription>
            Ingrese sus credenciales para acceder a su cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Correo</Label>
                <Input
                  data-testid="email"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-600" data-testid="error-email">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  data-testid="password"
                  id="password"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <span className="text-red-600" data-testid="error-password">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <Button className="w-full mt-4" type="submit" data-testid="sign-in">
              Ingresar
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          {/* <div className="text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </div> */}
        </CardFooter>
      </Card>
      {showErrorMessage && (
        <Label
          htmlFor="email"
          className="text-red-600 mt-4"
          data-testid="error-message"
        >
          Usuario o Contraseña incorrectos
        </Label>
      )}
    </div>
  );
}
