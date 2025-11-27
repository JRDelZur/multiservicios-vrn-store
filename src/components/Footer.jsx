// src/components/Footer.jsx (REEMPLAZAR TODO)
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual dinámicamente

  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        
        <p className="mb-4 text-sm">
          &copy; {currentYear} Multiservicios VRN. Todos los derechos reservados.
        </p>

        {/* Links de Navegación Legal y Contacto con separadores */}
        <div className="flex justify-center items-center space-x-2"> {/* Reduce space-x para los separadores */}
            <Link href="/legales#terminos">
                <span className="footer-link-item">Terminos y condiciones</span>
            </Link>
            <span className="footer-separator">|</span> {/* Separador */}
            <Link href="/legales#privacidad">
                <span className="footer-link-item">Aviso de privacidad</span>
            </Link>
            <span className="footer-separator">|</span> 
            <Link href="/legales#reembolsos">
                <span className="footer-link-item">Politica de reembolsos</span>
            </Link>
            <span className="footer-separator">|</span> 
            <Link href="/contact">
                <span className="footer-link-item">Contacto y soporte</span>
            </Link>
        </div>
      </div>
    </footer>
  );
}