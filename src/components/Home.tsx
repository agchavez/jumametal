import React, { useEffect, useState } from 'react';

// Usar URLs relativas para las imágenes en el directorio público
const images = [
  '/Imagenes/Inicio-1.jpeg',
  '/Imagenes/Inicio-2.jpeg',
  '/Imagenes/inicio-3.jpeg',
  '/Imagenes/Inicio-4.jpeg'
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="relative h-[500px]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Bienvenidos a JUMAMETAL</h1>
            <h3 className="text-2xl font-bold mb-2">De Residuos a Oportunidades</h3>
            <br />
            <p className="text-xl">
              ¡Bienvenidos a Jumametal! Nos enorgullece ser una empresa líder en el reciclaje, comprometida con transformar residuos en valiosas oportunidades. Únase a nosotros en nuestro viaje hacia un mundo más sostenible y descubra cómo cada pequeño gesto puede marcar una gran diferencia. 🌍♻️
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Sobre Nosotros</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700">
            <p className="mb-4">
              Jumametal nació con la visión de convertir el reciclaje en un pilar fundamental para la sostenibilidad en Honduras. Desde nuestros inicios, hemos trabajado incansablemente para ofrecer servicios de alta calidad en la compra y venta de materiales reciclables como botes plásticos, latas, aluminio, cobre, cartón y hierro. Nuestro compromiso es claro: transformar residuos en recursos valiosos.
            </p>
            <p>
              En Jumametal, creemos en el poder del reciclaje para cambiar el mundo. Con un equipo dedicado y una infraestructura robusta, hemos logrado establecer relaciones sólidas con nuestros clientes y proveedores, asegurando un impacto positivo en la comunidad y el medio ambiente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
