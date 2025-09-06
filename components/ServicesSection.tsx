import { motion } from 'motion/react';
import { Smile, Stethoscope, Zap, Crown, Shield, Braces, Scissors, Plane } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Smile,
      title: "Diseño de Sonrisa",
      description: "Sonrisa armónica, natural y personalizada que realza tu belleza única.",
      features: ["Análisis facial", "Mockup digital", "Resultados naturales"],
      price: "Desde $800.000",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Stethoscope,
      title: "Rehabilitación Oral",
      description: "Recuperación completa de función y estética dental.",
      features: ["Evaluación integral", "Plan personalizado", "Restauración funcional"],
      price: "Desde $1.200.000",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Implantes Dentales",
      description: "Titanio de alta calidad, solución segura y duradera.",
      features: ["Titanio grado médico", "Cirugía guiada", "Garantía extendida"],
      price: "Desde $2.500.000",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Crown,
      title: "Coronas Dentales",
      description: "Porcelana y zirconio para dientes naturales y resistentes.",
      features: ["Materiales premium", "Ajuste perfecto", "Estética natural"],
      price: "Desde $600.000",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Periodoncia",
      description: "Prevención y tratamiento de enfermedades de encías.",
      features: ["Diagnóstico preciso", "Tratamiento no invasivo", "Mantenimiento"],
      price: "Desde $400.000",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Braces,
      title: "Ortodoncia",
      description: "Brackets estéticos y alineadores invisibles.",
      features: ["Brackets estéticos", "Invisalign", "Seguimiento digital"],
      price: "Desde $3.500.000",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Scissors,
      title: "Cirugía Maxilofacial",
      description: "Muelas del juicio, traumas y anomalías maxilofaciales.",
      features: ["Cirugía mínimamente invasiva", "Recuperación rápida", "Anestesia local"],
      price: "Desde $800.000",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Plane,
      title: "Turismo Dental",
      description: "Atención a pacientes internacionales con planes completos.",
      features: ["Alojamiento incluido", "Traslados", "Seguimiento post-tratamiento"],
      price: "Paquetes desde $5.000.000",
      color: "from-violet-500 to-purple-500"
    }
  ];

  const additionalServices = [
    "Blanqueamiento Dental Profesional",
    "Botox Dental y Facial",
    "Ácido Hialurónico",
    "Carillas de Porcelana",
    "Endodoncia",
    "Limpieza Dental Profunda"
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
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
            Servicios Odontológicos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tratamientos Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios odontológicos con la más alta 
            calidad y tecnología de vanguardia
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 group-hover:text-[var(--dental-blue)] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-[var(--dental-gold)] rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--dental-blue)] font-bold text-sm">
                        {service.price}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs border-[var(--dental-blue)] text-[var(--dental-blue)] hover:bg-[var(--dental-blue)] hover:text-white"
                      >
                        Más Info
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[var(--dental-light-blue)] to-white rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Servicios Adicionales
            </h3>
            <p className="text-gray-600">
              También ofrecemos una amplia gama de tratamientos complementarios
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[var(--dental-blue)]/5"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--dental-gold)] rounded-full"></div>
                  <span className="text-gray-700 text-sm font-medium">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[var(--dental-blue)] to-[var(--dental-dark-blue)] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿No encuentras el tratamiento que buscas?
            </h3>
            <p className="text-[var(--dental-light-blue)] mb-8 max-w-2xl mx-auto">
              Contáctanos para una consulta personalizada. Evaluaremos tu caso 
              y te recomendaremos el mejor tratamiento para ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-[var(--dental-blue)] hover:bg-gray-100"
              >
                Consulta Gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--dental-blue)]"
              >
                Ver Planes de Financiación
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;