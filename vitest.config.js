import { defineConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';

export default defineVitestConfig({
  test: {
    setupFiles: './src/tests/vitest.setup.js', // Asegúrate de la ruta correcta
  },
});
