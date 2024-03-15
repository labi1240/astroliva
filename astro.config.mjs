import { defineConfig } from 'astro/config';
import { defineTable, setupAstroDB } from 'astro/db';
import * as dbConfig from '../src/db/config.ts';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [setupAstroDB({
      tables: dbConfig
    })],
  },
});
export default defineConfig({});
