// src/app/legales/page.jsx
import Link from 'next/link';
// Esta página es estática, por lo que puede ser un Server Component (no necesita 'use client')

export default function LegalesPage() {
  return (
    // La etiqueta <section> principal toma el padding del <main> global
    <section className="py-8"> 
      
      <h1>Avisos Legales y Políticas de Multiservicios VRN</h1>

      {/* 1. TÉRMINOS DE SERVICIO */}
      <section id="terminos" className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2>1. Términos de Servicio</h2>
        <p>
          {/* AQUÍ DEBES PEGAR EL TEXTO COMPLETO DE TUS TÉRMINOS Y CONDICIONES. */}
          Última Actualización: Noviembre 2025. Al utilizar nuestros servicios digitales y técnicos, usted acepta incondicionalmente estos términos. Multiservicios VRN se reserva el derecho de modificar estos términos en cualquier momento.
        </p>
        {/* Pega el resto de los párrafos aquí... */}
      </section>

      {/* 2. POLÍTICA DE PRIVACIDAD */}
      <section id="privacidad" className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2>2. Política de Privacidad</h2>
        <p>
          {/* AQUÍ DEBES PEGAR EL TEXTO COMPLETO DE TU POLÍTICA DE PRIVACIDAD. */}
          Recopilamos datos mínimos necesarios para la facturación y el contacto por correo electrónico. Nunca compartiremos su información con terceros sin su consentimiento expreso.
        </p>
        {/* Pega el resto de los párrafos aquí... */}
      </section>

      {/* 3. POLÍTICA DE REEMBOLSOS Y DEVOLUCIONES */}
      <section id="reembolsos" className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2>3. Política de Reembolsos y Devoluciones</h2>
        <p>
          {/* AQUÍ DEBES PEGAR EL TEXTO COMPLETO DE TUS POLÍTICAS DE REEMBOLSO. */}
          Dada la naturaleza de los productos digitales (PDFs, plantillas), no ofrecemos reembolsos una vez que el archivo ha sido descargado. Para servicios técnicos, la garantía aplica según el diagnóstico.
        </p>
        {/* Pega el resto de los párrafos aquí... */}
      </section>

    </section>
  );
}