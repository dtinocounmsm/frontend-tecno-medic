export const API_URL = process.env.API_URL ?? "http://localhost:3000/api";
export const ENV = (import.meta.env.MODE || "development") as
  | "development"
  | "production"
  | "test";
