import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faRecycle, faSort, faWarehouse } from '@fortawesome/free-solid-svg-icons';

// Usar URLs relativas para las imágenes en el directorio público
const images = [
  '/Imagenes/Servicio-1.jpeg',
  '/Imagenes/Servicio-2.jpeg',
  '/Imagenes/Servicio-3.jpeg',
  '/Imagenes/Servicio-4.jpeg',
  '/Imagenes/Servicio-5.jpeg',
  '/Imagenes/Servicio-6.jpeg',
  '/Imagenes/Servicio-7.jpeg',
  '/Imagenes/Servicio-8.jpeg'
];

export default function Services() {
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_obcs44t',
        'template_v0qlmx8',
        {
          to_email: 'jumametal07@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        'pXN-QPuY_46d2jdcy'
      );
      toast.success(<div><FontAwesomeIcon icon={faCheckCircle} /> Mensaje enviado con éxito!</div>);
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      toast.error(<div><FontAwesomeIcon icon={faTimesCircle} /> Error al enviar el mensaje. Por favor, intente nuevamente.</div>);
    }
  };

  const services = [
    {
      title: 'Compra y Venta de Materiales Reciclables',
      description: 'Adquirimos y vendemos botes plásticos, latas, aluminio, cobre, cartón y hierro, tanto en pequeñas como en grandes cantidades.',
      icon: faRecycle
    },
    {
      title: 'Clasificación y Procesamiento',
      description: 'Clasificamos y procesamos materiales reciclables para asegurar su máxima reutilización y minimizar el desperdicio.',
      icon: faSort
    },
    {
      title: 'Venta de Productos Reciclados',
      description: 'Disponemos de productos reciclados como notes, tambos de pintura y tanques de agua, promoviendo el uso de materiales sostenibles.',
      icon: faWarehouse
    }
  ];

  return (
    <div className="flex flex-col">
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar closeOnClick />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:rotate-2 hover:scale-105 relative"
              >
                <FontAwesomeIcon icon={service.icon} className="absolute top-2 right-2 text-gray-300 text-3xl" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Misión</h2>
          <div className="max-w-2xl mx-auto text-lg text-gray-700">
            <p className="mb-4">
              Transformar residuos en recursos valiosos, promoviendo un mundo más sostenible y concienciando a nuestra comunidad sobre la importancia del reciclaje y la protección del medio ambiente.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Visión</h2>
          <div className="max-w-2xl mx-auto text-lg text-gray-700">
            <p className="mb-4">
              Ser la empresa líder en reciclaje en Honduras, reconocida por nuestra innovación, compromiso con la sostenibilidad y capacidad para generar un impacto positivo en el medio ambiente y la sociedad.
            </p>
          </div>
        </div>
      </section>
      
      <div className="relative h-[550px]">
        {images.map((img, index) => (
          <div
            key={img}
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
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">Contáctenos</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Nombre</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Teléfono</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Correo</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Observación</label>
              <textarea
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
