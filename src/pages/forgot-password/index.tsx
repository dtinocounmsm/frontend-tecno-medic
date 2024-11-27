import { useState } from "react";
import { Link } from "react-router-dom";
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

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement forgot password logic
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Recuperar Contraseña</CardTitle>
          <CardDescription>
            Ingrese su correo electrónico para restablecer su contraseña
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button className="w-full mt-4" type="submit">
                Recuperar Contraseña
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <p className="mb-4">
                Si existe una cuenta para {email}, recibirá instrucciones para
                restablecer la contraseña.
              </p>
              <Link to="/login" className="text-blue-600 hover:underline">
                Volver al inicio de sesión
              </Link>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <div className="text-sm">
            ¿Recuerdas tu contraseña?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
