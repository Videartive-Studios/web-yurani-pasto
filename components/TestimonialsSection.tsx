import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "María José Rodríguez",
      location: "Cali, Colombia",
      treatment: "Diseño de Sonrisa",
      rating: 5,
      date: "Marzo 2024",
      text: "La Dra. Yurani transformó completamente mi sonrisa. No solo mejoró mi apariencia, sino también mi confianza. El proceso fue cómodo y los resultados superaron mis expectativas. ¡Definitivamente la recomiendo!",
      avatar: "MR",
      before: "Tenía dientes desalineados y manchados",
      after: "Sonrisa perfecta y natural"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      location: "Miami, USA",
      treatment: "Implantes Dentales + Turismo Dental",
      rating: 5,
      date: "Febrero 2024",
      text: "Vine desde Miami para el tratamiento de implantes con la Dra. Yurani. El servicio de turismo dental fue excepcional, desde el aeropuerto hasta el seguimiento post-operatorio. Calidad mundial a precios justos.",
      avatar: "CM",
      before: "Había perdido varios dientes",
      after: "Sonrisa completa y funcional"
    },
    {
      id: 3,
      name: "Ana Lucía Vásquez",
      location: "Bogotá, Colombia",
      treatment: "Ortodoncia Invisible",
      rating: 5,
      date: "Enero 2024",
      text: "El tratamiento con Invisalign fue perfecto. La Dra. Yurani me explicó todo el proceso detalladamente y los resultados fueron exactamente como me mostró en la simulación. Muy profesional y cálida.",
      avatar: "AV",
      before: "Dientes muy desalineados",
      after: "Alineación perfecta"
    },
    {
      id: 4,
      name: "Roberto Silva",
      location: "Medellín, Colombia",
      treatment: "Rehabilitación Oral Completa",
      rating: 5,
      date: "Diciembre 2023",
      text: "Después de años de problemas dentales, la Dra. Yurani logró rehabilitar completamente mi boca. Su enfoque integral y atención al detalle son incomparables. Ahora puedo sonreír sin preocupaciones.",
      avatar: "RS",
      before: "Múltiples problemas dentales",
      after: "Rehabilitación completa exitosa"
    },
    {
      id: 5,
      name: "Isabella Torres",
      location: "Quito, Ecuador",
      treatment: "Carillas de Porcelana",
      rating: 5,
      date: "Noviembre 2023",
      text: "Las carillas de porcelana que me colocó la Dra. Yurani se ven increíblemente naturales. Viajé desde Ecuador y valió totalmente la pena. El resultado es una sonrisa de película, pero completamente natural.",
      avatar: "IT",
      before: "Dientes pequeños y desgastados",
      after: "Sonrisa armónica y brillante"
    },
    {
      id: 6,
      name: "Diego Ramírez",
      location: "Cali, Colombia",
      treatment: "Blanqueamiento + Botox Dental",
      rating: 5,
      date: "Octubre 2023",
      text: "El combo de blanqueamiento dental y botox que me realizó la Dra. Yurani rejuveneció completamente mi rostro. Es una artista del área facial. Los resultados son naturales y muy elegantes.",
      avatar: "DR",
      before: "Dientes amarillentos, líneas de expresión",
      after: "Sonrisa blanca, rostro rejuvenecido"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-[var(--dental-gold)] fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-[var(--dental-blue)]/10 text-[var(--dental-blue)] mb-4">
            Testimonios de Pacientes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros Pacientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros pacientes es nuestra mejor carta de presentación. 
            Conoce sus experiencias reales.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16"
        >
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Quote Icon */}
                    <Quote className="w-12 h-12 text-[var(--dental-gold)] mb-6" />
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {renderStars(testimonials[currentTestimonial].rating)}
                      <span className="ml-2 text-sm text-gray-600">
                        {testimonials[currentTestimonial].rating}.0
                      </span>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>

                    {/* Patient Info */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-[var(--dental-blue)] text-white">
                            {testimonials[currentTestimonial].avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonials[currentTestimonial].name}
                          </h4>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="w-4 h-4 mr-1" />
                            {testimonials[currentTestimonial].location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-[var(--dental-blue)] text-[var(--dental-blue)]">
                          {testimonials[currentTestimonial].treatment}
                        </Badge>
                        <Badge variant="outline" className="border-gray-300 text-gray-600">
                          <Calendar className="w-3 h-3 mr-1" />
                          {testimonials[currentTestimonial].date}
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Before/After Info */}
                <div className="bg-gradient-to-br from-[var(--dental-light-blue)] to-[var(--dental-blue)]/5 p-8 md:p-12 flex flex-col justify-center">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Transformación Realizada
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/70 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                          <span className="text-sm font-semibold text-gray-700">Antes:</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {testimonials[currentTestimonial].before}
                        </p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-sm font-semibold text-gray-700">Después:</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {testimonials[currentTestimonial].after}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[var(--dental-blue)] mb-1">
                          5.0 ★
                        </div>
                        <div className="text-xs text-gray-600">
                          Calificación del Tratamiento
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[var(--dental-blue)]" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-[var(--dental-blue)]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-[var(--dental-blue)] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    "{testimonial.text.slice(0, 120)}..."
                  </p>
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-[var(--dental-gold)] text-white text-xs">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">{testimonial.treatment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-[var(--dental-blue)] to-[var(--dental-dark-blue)] rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para tu Transformación?
          </h3>
          <p className="text-[var(--dental-light-blue)] mb-8 max-w-2xl mx-auto">
            Únete a cientos de pacientes satisfechos que han confiado en nosotros 
            para transformar sus sonrisas y cambiar sus vidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[var(--dental-blue)] hover:bg-gray-100"
            >
              Ver Más Testimonios
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-[rgba(181,125,168,1)] hover:bg-white hover:text-[var(--dental-blue)]"
            >
              Solicitar Consulta
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;