// 1. Importaciones de CSS y Componentes (ajusta las rutas si es necesario)
import '../styles/global.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// 2. Metadata para SEO (Reemplazando los datos por defecto)
export const metadata = {
  title: "Multiservicios VRN | Soluciones Digitales y Soporte Técnico",
  description: "Impulsa tu negocio con recursos digitales exclusivos y mantén tus equipos optimizados. La solución todo-en-uno para tu operación en Morelia.",
};

export default function RootLayout({ children }) {
  return (
    // 3. Cambiamos el idioma a español (es) y quitamos las clases de fuentes borradas
    <html lang="es">
      <body>
        
        {/* 4. Cabecera visible en todas las páginas */}
        <Header /> 
        
        {/* 5. El contenido de la página (children) va dentro del tag <main> */}
        <main>
          {children}
        </main>
        
        {/* 6. Pie de página visible en todas las páginas */}
        <Footer />
        
      </body>
    </html>
  );
}