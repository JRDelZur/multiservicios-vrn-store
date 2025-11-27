// src/app/page.jsx
// 'use client' es necesario porque hay botones y enlaces que inician navegación
'use client';
import Link from 'next/link';
// Importamos los datos y la estructura de las tarjetas para reutilizar el código
import { digitalServices, technicalServices } from '../../data/serviceData';
import ServiceCard from '../components/ServiceCard'; // Lo crearemos en el siguiente paso

export default function HomePage() {
  return (
    <section>

      {/* A. SECCIÓN HERO/BIENVENIDA (Lanzamiento) */}
      <section className="hero-section">
        <h1>Soluciones Digitales y Soporte Técnico Profesional</h1>
        <p>Impulsa tu negocio con nuestros recursos digitales exclusivos y mantén tus equipos optimizados con nuestro servicio técnico experto en Morelia.</p>

        <div className="hero-actions">
          <Link href="/store" className="hero-btn primary">Ver Recursos Digitales</Link>
          <Link href="/contact" className="hero-btn secondary">Solicitar Soporte Técnico</Link>
        </div>
      </section>

      {/* B. SECCIÓN DE SERVICIOS DIGITALES */}
      <section id="digital" className="service-section">
        <h2>Nuestras Soluciones Digitales</h2>
        <p>Impulsamos tu marca con diseño, copywriting, traducciones y más.</p>

        <div className="services-grid products-grid">
          {/* Mapeamos los datos para crear las tarjetas de servicio */}
          {digitalServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* C. SECCIÓN DE SERVICIOS TÉCNICOS */}
      <section id="tecnico" className="service-section">
        <h2>Nuestras Soluciones Técnicas</h2>
        <p>Mantenemos tu operación funcionando con soporte, redes y reparaciones.</p>

        <div className="services-grid products-grid">
          {/* Mapeamos los datos para crear las tarjetas de servicio */}
          {technicalServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* D. SECCIÓN FINAL CTA */}
      <section className="cta-final">
        <h2>¿Listo para Optimizar tu Operación Digital?</h2>
        <p>Comienza hoy mismo con una consulta gratuita o explora nuestra librería de recursos exclusivos.</p>
        <Link href="/contact" className="hero-btn primary">¡Hablemos Ahora!</Link>
      </section>

    </section>
  );
}