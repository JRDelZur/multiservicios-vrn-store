// src/app/contacto/page.jsx
'use client'; 
import Link from 'next/link';

export default function ContactoPage() {
  return (
    <section className="py-8 px-4 max-w-4xl mx-auto"> 
      
      <h1>Contacto y Soporte</h1>
      <p className="text-lg mb-8 text-center text-gray-600">
        ¿Tienes dudas sobre un recurso digital o necesitas soporte técnico urgente? Escríbenos directamente.
      </p>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h2>Envía un Mensaje</h2>

        {/* NOTA: Reemplaza el 'action' y 'method' con la lógica de envío de tu formulario (ej. Formspree o tu propia API) */}
        <form 
            action="/api/submit-contact" // Ejemplo de una ruta API en Next.js
            method="POST" 
            className="space-y-6"
        >
            
            {/* Campo Nombre */}
            <div className='form-group'>
                <label htmlFor="nombre" /*className="block text-sm font-medium text-gray-700 mb-1"*/>Nombre Completo</label>
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    required 
                    className="input-field" 
                />
            </div>

            {/* Campo Correo */}
            <div className='form-group'>
                <label htmlFor="email" /*className="block text-sm font-medium text-gray-700 mb-1"*/>Correo Electrónico</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="input-field" 
                />
            </div>

            {/* Campo Mensaje */}
            <div className='form-group'>
                <label htmlFor="mensaje" /*className="block text-sm font-medium text-gray-700 mb-1"*/>Tu Consulta</label>
                <textarea 
                    id="mensaje" 
                    name="mensaje" 
                    rows="4" 
                    required 
                    className="input-field"
                ></textarea>
            </div>

            {/* Botón de Envío (usando la clase de botón principal que ya definimos) */}
            <div>
                <button type="submit" className="btn-comprar">
                    Enviar Consulta
                </button>
            </div>
        </form>

      </div>

      {/* Información de Contacto Adicional */}
      {/* <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold mb-3">O Contáctanos Directamente</h3>
        <p className="text-gray-700">
            **WhatsApp/Teléfono:** +52 443 XXX XX XX (Soporte Rápido)<br />
            **Correo Electrónico:** contacto@multiserviciosvrn.com
        </p>
      </div> */}
    </section>
  );
}