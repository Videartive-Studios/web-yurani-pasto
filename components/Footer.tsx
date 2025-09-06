import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
} from "lucide-react";
import {
  footerSections,
  socialLinks,
} from "./footer/FooterData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[var(--dental-dark-purple)] to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[var(--dental-aqua)] to-[var(--dental-light-aqua)] rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">
                  Y
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Dra. Yurani Pasto
                </h3>
                <p className="text-[var(--dental-light-blue)] text-sm">
                  Odontología Estética
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Especialista en odontología estética y
              rehabilitación oral. Transformamos vidas
              devolviendo naturalidad a tu sonrisa con más de 10
              años de experiencia y técnicas de vanguardia.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--dental-aqua)]" />
                <span>300 705 4003</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--dental-aqua)]" />
                <span>odontologiayuranipasto@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[var(--dental-aqua)]" />
                <span>
                  Calle 5 # 38-25, Consultorio 204, Cali
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[var(--dental-aqua)]" />
                <span>Atención 24 horas</span>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="lg:col-span-2"
            >
              <h4 className="text-lg font-semibold mb-4 text-[var(--dental-aqua)]">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[var(--dental-aqua)] transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-semibold mb-4 text-[var(--dental-aqua)]">
              Mantente Conectado
            </h4>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-gray-300 text-sm mb-3">
                Recibe consejos de salud oral y promociones
                especiales
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-[var(--dental-aqua)]"
                />
                <button className="bg-[var(--dental-aqua)] text-gray-900 px-4 py-2 rounded-r-lg hover:bg-[var(--dental-light-aqua)] transition-colors text-sm font-medium">
                  Suscribir
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-medium mb-3">Síguenos</h5>
              <div className="space-y-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-[var(--dental-aqua)] transition-all duration-200"
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm">
                      {social.handle}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-sm text-gray-400"
            >
              <span>
                © {currentYear} Dra. Yurani Pasto. Todos los
                derechos reservados.
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-1 text-sm text-gray-400"
            >
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>para sonrisas perfectas</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <a
                href="#"
                className="text-gray-400 hover:text-[var(--dental-aqua)] transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[var(--dental-aqua)] transition-colors"
              >
                Términos de Uso
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[var(--dental-aqua)] transition-colors"
              >
                Cookies
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;