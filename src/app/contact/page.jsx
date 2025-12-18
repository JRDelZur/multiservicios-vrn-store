// src/app/contacto/page.jsx
'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://backendvrn.onrender.com/enviar-contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', email: '', mensaje: '' }); // Limpiar form
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
      } else {
        setStatus('error');
        alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      alert("Error de conexión. Revisa tu internet.");
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contacto y Soporte</h1>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Envía un Mensaje</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Campo Nombre */}
              <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo</label>
                  <input 
                      type="text" 
                      id="nombre" 
                      name="nombre" 
                      value={formData.nombre}
                      onChange={handleChange}
                      required 
                      className="input-field" 
                      placeholder="Tu nombre aquí"
                  />
              </div>

              {/* Campo Correo */}
              <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="input-field" 
                      placeholder="tucorreo@ejemplo.com"
                  />
              </div>

              {/* Campo Mensaje */}
              <div className="form-group">
                  <label htmlFor="mensaje">Tu Consulta</label>
                  <textarea 
                      id="mensaje" 
                      name="mensaje" 
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows="4" 
                      required 
                      className="input-field"
                      placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
              </div>

              {/* Botón de Envío */}
              <div>
                  <button 
                    type="submit" 
                    className="btn-comprar w-full"
                    disabled={status === 'loading'}
                  >
                      {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR CONSULTA'}
                  </button>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
}