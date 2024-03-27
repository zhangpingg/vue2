import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

export default defineConfig({
    server: {
        port: 8083,
        cors: true,
        origin: "http://localhost:8083",
    },
    plugins: [createVuePlugin()],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
});
