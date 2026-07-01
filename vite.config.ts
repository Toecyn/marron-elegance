import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

// NOTE: the original Lovable project used a wrapper package,
// "@lovable.dev/vite-tanstack-config", which is internal to the Lovable
// platform and not published on the public npm registry. This file
// reproduces the same plugin stack directly so the project builds and
// runs outside of Lovable with plain Vite + TanStack Start.
export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    viteReact(),
  ],
});
