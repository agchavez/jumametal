import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
// Importa tu imagen
import logo from '../public/Imagenes/Logo.jpeg';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-900 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              {/* Incrementa el tamaño del logo y agrega el hipervínculo */}
              <Link to="/">
                <img src={logo} alt="Logo de la página" className="w-16 h-16" />
              </Link>
              
            </div>
            <nav>
              <Link to="/" className="bg-white text-blue-600 px-4 py-2 rounded-lg mr-4 hover:bg-blue-100 transition">
                Inicio
              </Link>
              <Link to="/services" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition">
                Servicios
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        <footer className="bg-blue-900 text-white py-6">
          <div className="container mx-auto text-center">
            <p className="mb-2">© {new Date().getFullYear()} JUMAMETAL. Todos los derechos reservados.</p>
            <p className="mb-2">
              <a href="mailto:jumametal07@gmail.com" className="hover:text-blue-400">
                jumametal07@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.google.com/maps/place/Colonia+brisas+Del+Valle/@14.3096387,-87.6731552,17.66z/data=!4m15!1m8!3m7!1s0x8f650d82a4c90203:0x2593df231c3f78ae!2sLa+Paz!3b1!8m2!3d13.9984833!4d-87.9334803!16zL20vMDJwbjRk!3m5!1s0x8f6583000fcec8ad:0x13d4271a93ce345!8m2!3d14.3094426!4d-87.6741518!16s%2Fg%2F11wprpnl46?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                Colonia brisas Del Valle La Paz, La Paz, Honduras
              </a>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
