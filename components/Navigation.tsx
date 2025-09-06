import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre Mí' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#galeria', label: 'Galería' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#blog', label: 'Blog' },
    { href: '#contacto', label: 'Contacto' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-[var(--dental-blue)] to-[var(--dental-aqua)] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Dra. Yurani Pasto</h2>
                <p className="text-xs text-[var(--dental-blue)]">Odontología Estética</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-[var(--dental-blue)] transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-[var(--dental-purple)] text-[var(--dental-purple)] hover:bg-[var(--dental-purple)] hover:text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Llamar
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-[var(--dental-blue)] to-[var(--dental-aqua)] hover:from-[var(--dental-dark-blue)] hover:to-[var(--dental-aqua)] text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          x: isOpen ? 0 : '100%' 
        }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 md:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
          <div className="flex flex-col h-full pt-20 px-6">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : 50 
                }}
                transition={{ delay: index * 0.1 }}
                className="py-4 text-lg font-medium text-gray-700 hover:text-[var(--dental-blue)] border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            
            <div className="mt-8 space-y-4">
              <Button
                variant="outline"
                className="w-full border-[var(--dental-purple)] text-[var(--dental-purple)]"
              >
                <Phone className="w-4 h-4 mr-2" />
                300 705 4003
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-[var(--dental-blue)] to-[var(--dental-aqua)] text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;