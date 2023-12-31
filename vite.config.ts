import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/DashboardApp",
      },
      shared: ["react", "react-dom"],
      remotes: {
        //remote: "https://vite-mfe-demo-remote.vercel.app/assets/remoteEntry.js",
        remote: "http://localhost:3000/assets/remoteEntry.js"
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
