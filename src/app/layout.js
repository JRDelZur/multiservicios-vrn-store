import '../styles/global.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Multiservicios VRN | Soluciones Digitales y Soporte Técnico",
  description: "Impulsa tu negocio con recursos digitales exclusivos y mantén tus equipos optimizados. La solución todo-en-uno para tu operación en Morelia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        
        <Header /> 
        
        <main>
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}