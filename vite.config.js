import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/shopper/", // <--- Add your repo name here (case-sensitive)
  plugins: [react()],
});
