import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Cuidados Post-Operatorios para Implantes Dentales",
      excerpt: "Descubre las mejores prácticas para garantizar el éxito de tu implante dental y acelerar el proceso de cicatrización.",
      image: "https://images.unsplash.com/photo-1598256989809-394fa4f6cd26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50cyUyMGJlZm9yZSUyMGFmdGVyfGVufDF8fHx8MTc1NTU3NjY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Implantes",
      author: "Dra. Yurani Pasto",
      date: "15 Enero 2024",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Turismo Dental en Colombia: Todo lo que Necesitas Saber",
      excerpt: "Colombia se ha convertido en un destino líder para el turismo dental. Conoce las ventajas y qué esperar de tu viaje.",
      image: "https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTU1NzY2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Turismo Dental",
      author: "Dra. Yurani Pasto",
      date: "10 Enero 2024",
      readTime: "8 min",
      featured: true
    },
    {
      id: 3,
      title: "5 Señales de que Necesitas un Diseño de Sonrisa",
      excerpt: "Identifica cuándo es el momento perfecto para considerar un diseño de sonrisa profesional y mejorar tu autoestima.",
      image: "https://images.unsplash.com/photo-1575183464658-e031ef1cd833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzbWlsZSUyMHRlZXRofGVufDF8fHx8MTc1NTU3NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Estética Dental",
      author: "Dra. Yurani Pasto",
      date: "5 Enero 2024",
      readTime: "4 min",
      featured: false
    },
    {
      id: 4,
      title: "Botox Dental: Más Allá de la Estética Facial",
      excerpt: "Conoce los beneficios terapéuticos del botox dental para tratar el bruxismo y la hipertrofia del masetero.",
      image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjBkZW50aXN0JTIwZG9jdG9yfGVufDF8fHx8MTc1NTU3NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Tratamientos Estéticos",
      author: "Dra. Yurani Pasto",
      date: "28 Diciembre 2023",
      readTime: "6 min",
      featured: false
    },
    {
      id: 5,
      title: "Carillas vs. Coronas: ¿Cuál es la Mejor Opción?",
      excerpt: "Comparamos las ventajas y desventajas de carillas y coronas para ayudarte a tomar la mejor decisión.",
      image: "https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTU1NzY2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Rehabilitación",
      author: "Dra. Yurani Pasto",
      date: "20 Diciembre 2023",
      readTime: "7 min",
      featured: false
    },
    {
      id: 6,
      title: "Rutina de Higiene Oral: Consejos de una Especialista",
      excerpt: "Aprende la rutina de higiene oral perfecta para mantener tu sonrisa saludable y prevenir problemas dentales.",
      image: "https://images.unsplash.com/photo-1575183464658-e031ef1cd833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzbWlsZSUyMHRlZXRofGVufDF8fHx8MTc1NTU3NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Prevención",
      author: "Dra. Yurani Pasto",
      date: "15 Diciembre 2023",
      readTime: "5 min",
      featured: false
    }
  ];

  const categories = [
    "Todos",
    "Estética Dental",
    "Implantes",
    "Turismo Dental",
    "Prevención",
    "Tratamientos Estéticos"
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-[var(--dental-light-blue)]/30">
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
            Blog de Salud Oral
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Consejos y Novedades Dentales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado con los últimos consejos, técnicas y tratamientos 
            en odontología moderna y estética dental.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 shadow-lg h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[var(--dental-gold)] text-white">
                      Destacado
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {post.category}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--dental-blue)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[var(--dental-blue)] rounded-full flex items-center justify-center mr-3">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-700">{post.author}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[var(--dental-blue)] hover:text-[var(--dental-dark-blue)] p-0"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Regular Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="bg-white/90 border-[var(--dental-blue)] text-[var(--dental-blue)]">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-5">
                  <div className="flex items-center space-x-3 mb-3 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[var(--dental-blue)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      Por {post.author}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[var(--dental-blue)] hover:text-[var(--dental-dark-blue)] p-0 text-xs"
                    >
                      Leer más
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[var(--dental-blue)] to-[var(--dental-dark-blue)] rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Suscríbete a Nuestro Blog
          </h3>
          <p className="text-[var(--dental-light-blue)] mb-8 max-w-2xl mx-auto">
            Recibe los últimos consejos de salud oral, novedades en tratamientos 
            y promociones especiales directamente en tu email.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email aquí..."
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-[var(--dental-gold)] outline-none"
            />
            <Button
              size="lg"
              className="bg-[rgba(255,255,255,0.86)] hover:bg-[var(--dental-gold)]/90 text-gray-900"
            >
              Suscribirse
            </Button>
          </div>
          
          <p className="text-xs text-[var(--dental-light-blue)] mt-4">
            * No spam. Puedes cancelar tu suscripción en cualquier momento.
          </p>
        </motion.div>

        {/* Blog Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Explora por Categorías
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="border-[var(--dental-blue)] text-[var(--dental-blue)] hover:bg-[var(--dental-blue)] hover:text-white"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;