import { defineConfig, loadEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const feEnv = loadEnv(mode, process.cwd(), "");

  const config: UserConfig = {
    plugins: [react()],
    define: {
      "process.env": feEnv,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
  return config;
});
