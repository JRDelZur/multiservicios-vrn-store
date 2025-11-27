// src/components/ServiceCard.jsx
import Link from 'next/link';

export default function ServiceCard({ service }) {
    return (
        <article className="card product-card">
            <div className="product-card-content">
                <h3>{service.title}</h3>
                {/* Nota: Usamos la etiqueta <p> para la descripción */}
                <p>{service.description}</p> 
                
                {/* Puedes ajustar el 'href' a una página de detalle de servicio si existe */}
                <Link href={`/contact`} className="card-button">
                    Ver más
                </Link>
            </div>
        </article>
    );
}