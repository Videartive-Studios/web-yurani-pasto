import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, Heart, Share2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'smile-design', label: 'Diseño de Sonrisa' },
    { id: 'implants', label: 'Implantes' },
    { id: 'orthodontics', label: 'Ortodoncia' },
    { id: 'veneers', label: 'Carillas' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'smile-design',
      title: 'Diseño de Sonrisa Completo',
      description: 'Transformación completa con carillas de porcelana',
      beforeImage: 'https://images.unsplash.com/photo-1575183464658-e031ef1cd833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzbWlsZSUyMHRlZXRofGVufDF8fHx8MTc1NTU3NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      afterImage: 'https://images.unsplash.com/photo-1575183464658-e031ef1cd833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzbWlsZSUyMHRlZXRofGVufDF8fHx8MTc1NTU3NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      duration: '3 semanas',
      treatment: 'Carillas de Porcelana'
    },
    {
      id: 2,
      category: 'implants',
      title: 'Implante Dental Individual',
      description: 'Reemplazo de diente con implante de titanio',
      beforeImage: 'https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50cyUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc1NTU3NjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      afterImage: 'https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50cyUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc1NTU3NjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      duration: '4 meses',
      treatment: 'Implante de Titanio'
    },
    {
      id: 3,
      category: 'orthodontics',
      title: 'Ortodoncia Invisible',
      description: 'Alineación dental con Invisalign',
      beforeImage: 'https://images.unsplash.com/photo-1575183464658-e031ef1cd833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzbWlsZSUyMHRlZXRofGVufDF8fHx8MTc1NTU3NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      afterImage: 'https://images.unsplash.com/photo-1575183464658-e031ef1cd833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzbWlsZSUyMHRlZXRofGVufDF8fHx8MTc1NTU3NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      duration: '18 meses',
      treatment: 'Invisalign'
    },
    {
      id: 4,
      category: 'veneers',
      title: 'Carillas Ultra Finas',
      description: 'Mejora estética mínimamente invasiva',
      beforeImage: 'https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50cyUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc1NTU3NjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      afterImage: 'https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50cyUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc1NTU3NjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      duration: '2 semanas',
      treatment: 'Carillas Ultra Finas'
    },
    {
      id: 5,
      category: 'smile-design',
      title: 'Rehabilitación Completa',
      description: 'Caso complejo de rehabilitación oral',
      beforeImage: 'https://images.unsplash.com/photo-1575183464658-e031ef1cd833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzbWlsZSUyMHRlZXRofGVufDF8fHx8MTc1NTU3NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      afterImage: 'https://images.unsplash.com/photo-1575183464658-e031ef1cd833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzbWlsZSUyMHRlZXRofGVufDF8fHx8MTc1NTU3NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      duration: '6 meses',
      treatment: 'Rehabilitación Integral'
    },
    {
      id: 6,
      category: 'implants',
      title: 'Implantes Múltiples',
      description: 'Restauración de varios dientes',
      beforeImage: 'https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50cyUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc1NTU3NjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      afterImage: 'https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50cyUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc1NTU3NjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      duration: '5 meses',
      treatment: 'Implantes Múltiples'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const BeforeAfterCard = ({ item, index }: { item: any, index: number }) => {
    const [showAfter, setShowAfter] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="relative overflow-hidden">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                animate={{ x: showAfter ? '-100%' : '0%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <ImageWithFallback
                  src={item.beforeImage}
                  alt={`${item.title} - Antes`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-red-500 text-white">Antes</Badge>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute inset-0"
                animate={{ x: showAfter ? '0%' : '100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <ImageWithFallback
                  src={item.afterImage}
                  alt={`${item.title} - Después`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-green-500 text-white">Después</Badge>
                </div>
              </motion.div>

              {/* Toggle Button */}
              <button
                onClick={() => setShowAfter(!showAfter)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
              >
                {showAfter ? (
                  <ChevronLeft className="w-6 h-6 text-[var(--dental-blue)]" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-[var(--dental-blue)]" />
                )}
              </button>

              {/* Overlay with actions */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/90 text-gray-900 hover:bg-white"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Detalles
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[var(--dental-blue)] transition-colors">
                {item.title}
              </h3>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="text-gray-400 hover:text-[var(--dental-blue)] transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="text-xs text-gray-500">
                  <span className="font-medium">Tratamiento:</span> {item.treatment}
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-medium">Duración:</span> {item.duration}
                </div>
              </div>
              <Badge variant="outline" className="border-[var(--dental-gold)] text-[var(--dental-gold)]">
                ⭐ Resultado Destacado
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-[var(--dental-light-blue)]/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-[var(--dental-gold)]/10 text-[var(--dental-gold)] mb-4">
            Galería de Sonrisas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resultados que Hablan por Sí Solos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada sonrisa cuenta una historia de transformación. Conoce algunos de 
            nuestros casos más exitosos.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id 
                ? "bg-[var(--dental-blue)] hover:bg-[var(--dental-dark-blue)]" 
                : "border-[var(--dental-blue)] text-[var(--dental-blue)] hover:bg-[var(--dental-blue)] hover:text-white"
              }
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <BeforeAfterCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[var(--dental-blue)] to-[var(--dental-dark-blue)] rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Resultados que nos Enorgullecen
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--dental-gold)] mb-2">
                500+
              </div>
              <div className="text-[var(--dental-light-blue)] text-sm">
                Sonrisas Transformadas
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--dental-gold)] mb-2">
                98%
              </div>
              <div className="text-[var(--dental-light-blue)] text-sm">
                Satisfacción del Cliente
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--dental-gold)] mb-2">
                15
              </div>
              <div className="text-[var(--dental-light-blue)] text-sm">
                Países Atendidos
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--dental-gold)] mb-2">
                5★
              </div>
              <div className="text-[var(--dental-light-blue)] text-sm">
                Calificación Promedio
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            ¿Te gustaría ver tu sonrisa transformada como estas?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[var(--dental-blue)] to-[var(--dental-gold)] hover:from-[var(--dental-dark-blue)] hover:to-[var(--dental-gold)] text-white"
          >
            Solicita tu Consulta Gratuita
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;