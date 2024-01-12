// build.ts
import { config } from 'dotenv';
import dts from 'vite-plugin-dts';

config();

export default {
  plugins: [dts()],
};
