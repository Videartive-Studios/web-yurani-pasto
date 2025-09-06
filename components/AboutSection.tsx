import { motion } from 'motion/react';
import { GraduationCap, Award, Users, Globe, Sparkles, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const AboutSection = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Formación Académica",
      description: "Odontóloga graduada de la Universidad Santiago de Cali"
    },
    {
      icon: Clock,
      title: "Experiencia",
      description: "Más de 10 años transformando sonrisas"
    },
    {
      icon: Sparkles,
      title: "Especialización",
      description: "Diseño de sonrisa, estética dental, botox y ácido hialurónico"
    },
    {
      icon: Globe,
      title: "Turismo Dental",
      description: "Amplia experiencia atendiendo pacientes internacionales"
    }
  ];

  const stats = [
    { number: "10+", label: "Años de Experiencia" },
    { number: "500+", label: "Sonrisas Transformadas" },
    { number: "50+", label: "Pacientes Internacionales" },
    { number: "100%", label: "Satisfacción" }
  ];

  const specialties = [
    "Diseño de Sonrisa",
    "Estética Dental",
    "Rehabilitación Oral",
    "Implantes Dentales",
    "Botox Dental",
    "Ácido Hialurónico",
    "Turismo Dental",
    "Odontología Cosmética"
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-white to-[var(--dental-light-blue)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-[var(--dental-aqua)]/10 text-[var(--dental-aqua)] mb-4">
            Sobre la Doctora
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dra. Yurani Pasto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Especialista en odontología estética con pasión por crear sonrisas naturales 
            y devolver la confianza a cada paciente
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTU1NzY2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Consultorio Dra. Yurani Pasto"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[var(--dental-blue)] to-[var(--dental-aqua)] rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">10+</p>
                    <p className="text-sm text-gray-600">Años de experiencia</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pasión por la Excelencia Dental
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Como odontóloga graduada de la prestigiosa Universidad Santiago de Cali, 
                  he dedicado más de una década a perfeccionar el arte de la sonrisa. 
                  Mi enfoque va más allá de la técnica dental tradicional.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Me especializo en combinar la ciencia dental con la estética avanzada, 
                  utilizando las últimas tecnologías en diseño de sonrisa, botox dental 
                  y ácido hialurónico para crear resultados naturales y armoniosos.
                </p>
              </div>

              {/* Specialties */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Especialidades</h4>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((specialty, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Badge 
                        variant="outline" 
                        className="border-[var(--dental-blue)] text-[var(--dental-blue)] hover:bg-[var(--dental-blue)] hover:text-white transition-colors"
                      >
                        {specialty}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-r from-[var(--dental-light-blue)] to-white p-6 rounded-xl border border-[var(--dental-blue)]/10">
                <h4 className="text-lg font-semibold text-[var(--dental-purple)] mb-2">Mi Misión</h4>
                <p className="text-gray-700 italic">
                  "Transformar no solo sonrisas, sino vidas completas. Cada paciente merece 
                  sentirse seguro y orgulloso de su sonrisa, y esa es mi mayor motivación."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Qualifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qualifications.map((qualification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[var(--dental-blue)] to-[var(--dental-aqua)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <qualification.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {qualification.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {qualification.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[var(--dental-purple)] to-[var(--dental-dark-purple)] rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-[var(--dental-light-blue)] text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;