import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        "service-admin-iit": "http://localhost:3001/assets/remoteEntry.js",
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
