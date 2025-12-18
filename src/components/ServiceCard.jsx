// src/components/ServiceCard.jsx
import Link from 'next/link';

export default function ServiceCard({ service }) {
    return (
        <article className="card product-card">
            <div className="product-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p> 
                
                <Link href={`/contact`} className="card-button">
                    Ver más
                </Link>
            </div>
        </article>
    );
}