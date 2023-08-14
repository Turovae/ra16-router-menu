import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(( {command} ) => {
  console.log(command);

  const setting = {
    plugins: [react()],
    base: '',
  };

  if (command === 'build') setting.base = 'https://turovae.github.io/ra16-router-menu/';

  return setting;
});
