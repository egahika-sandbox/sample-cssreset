import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";

export default defineConfig({
    plugins: [React(), Pages()],
});
