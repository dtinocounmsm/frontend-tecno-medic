import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

export const AuthLayout = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="h-[100vh] bg-gray-100 flex">
      {/* Left half - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="/medical-technology.webp"
          alt="Authentication background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-900/50 flex flex-col justify-end p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Bienvenido a nuestro sistema
          </h1>
          {/* <p className="text-xl">
            Secure, fast, and reliable authentication for your needs.
          </p> */}
        </div>
      </div>

      {/* Right half - Form content (Outlet) */}
      <div
        className={cn(
          "w-full lg:w-1/2 flex items-center justify-center p-8",
          className,
        )}
        {...props}
      >
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
