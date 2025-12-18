// src/app/legales/page.jsx
import Link from 'next/link';

export default function LegalesPage() {
  return (
    <section className="py-8"> 
      
      <h1>Avisos Legales y Políticas de Multiservicios VRN</h1>

      <section id="terminos" className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2>1. Términos de Servicio</h2>
        <p>
          Última Actualización: Noviembre 2025. Al utilizar nuestros servicios digitales y técnicos, usted acepta incondicionalmente estos términos. Multiservicios VRN se reserva el derecho de modificar estos términos en cualquier momento.
        </p>
      </section>

      <section id="privacidad" className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2>2. Política de Privacidad</h2>
        <p>
          Recopilamos datos mínimos necesarios para la facturación y el contacto por correo electrónico. Nunca compartiremos su información con terceros sin su consentimiento expreso.
        </p>
      </section>

      <section id="reembolsos" className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2>3. Política de Reembolsos y Devoluciones</h2>
        <p>
          Dada la naturaleza de los productos digitales (PDFs, plantillas), no ofrecemos reembolsos una vez que el archivo ha sido descargado. Para servicios técnicos, la garantía aplica según el diagnóstico.
        </p>
      </section>

    </section>
  );
}