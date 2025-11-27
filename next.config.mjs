/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRÍTICO: Mantenemos la exportación estática para el despliegue en Netlify/Vercel
  output: 'export', 
  images: { unoptimized: true },

  // OPCIONAL: Activamos el React Compiler (experimental)
  reactCompiler: true,
};

export default nextConfig;