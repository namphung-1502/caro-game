import { defineConfig } from "vite";

export default defineConfig({
  define: {
    DEV_MODE: false,
  },
  server: {
    port: 8080,
  },
  build: {
    outDir                : "dist",
    assetsDir             : "",
    minify                : true,
    emptyOutDir           : false,
    copyPublicDir         : false,
    chunkSizeWarningLimit : 2 * 1024, // 2MB
  },
  publicDir : "dist",
  plugins   : [],
});
