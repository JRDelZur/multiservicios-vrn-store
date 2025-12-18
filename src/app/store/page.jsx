// src/app/tienda/page.jsx
import ProductCard from '../../components/ProductCard';

const products = [
    {
        id: 1,
        nombre: 'Pequeño Perez y la Carrera de las Nubes Lentas',
        precio: 19900,
        archivo: '/Ebooks/LaCarreraDeLasNubesLentas.pdf',
        imagenUrl: '/img/carrera.png'
    },
    {
        id: 2,
        nombre: 'Pequeño Perez y el Rescate de las Semillas Saltarinas',
        precio: 25000,
        archivo: '/Ebooks/ElRescateDeLasSemillasSaltarinas.pdf',
        imagenUrl: '/img/semillas.png'
    },
    {
        id: 3,
        nombre: 'Pequeño Perez y la Nube de Semillas de Sol',
        precio: 12000,
        archivo: 'LaNubeDeSemillasDeSol.pdf',
        imagenUrl: '/img/nube.png'
    },
];

export default function TiendaPage() {
    return (

        <section>
            <h1>Tienda de Recursos Digitales</h1>

            <div className="products-grid">


                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        nombre={product.nombre}
                        precio={product.precio}
                        archivo={product.archivo}
                        imagenUrl={product.imagenUrl}
                    />
                ))}
            </div>
        </section>
    );
}