import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, User, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "300 705 4003",
      action: "tel:+573007054003",
      description: "Disponible 24 horas"
    },
    {
      icon: Mail,
      title: "Email",
      value: "odontologiayuranipasto@gmail.com",
      action: "mailto:odontologiayuranipasto@gmail.com",
      description: "Respuesta en 24h"
    },
    {
      icon: MapPin,
      title: "Dirección",
      value: "Calle 5 # 38-25, Consultorio 204",
      subValue: "Edificio Plaza San Fernando, Cali",
      action: "#",
      description: "Centro de Cali"
    },
    {
      icon: Clock,
      title: "Horarios",
      value: "Atención 24 horas",
      subValue: "Citas con previa programación",
      action: "#",
      description: "Flexibilidad total"
    }
  ];

  const services = [
    "Diseño de Sonrisa",
    "Implantes Dentales",
    "Carillas de Porcelana",
    "Ortodoncia",
    "Blanqueamiento Dental",
    "Rehabilitación Oral",
    "Botox Dental",
    "Turismo Dental",
    "Consulta General"
  ];

  const socialMedia = [
    {
      name: "Instagram",
      handle: "@doctorayuranipasto",
      url: "#",
      color: "from-pink-500 to-red-500"
    },
    {
      name: "TikTok",
      handle: "@doctorayuranipasto",
      url: "#",
      color: "from-black to-gray-600"
    },
    {
      name: "Facebook",
      handle: "doctorayuranipasto",
      url: "#",
      color: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
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
            Contacto y Ubicación
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Agenda tu Consulta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a lograr la sonrisa de tus sueños. 
            Contáctanos y comencemos tu transformación hoy mismo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Card className="shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-[var(--dental-blue)] to-[var(--dental-dark-blue)] text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Solicita tu Consulta Gratuita
                </CardTitle>
                <p className="text-[var(--dental-light-blue)]">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Tu nombre completo"
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Tu número de teléfono"
                        className="w-full"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Servicio de Interés
                    </label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Cuéntanos sobre tu caso, expectativas o cualquier pregunta que tengas..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-[var(--dental-blue)] to-[var(--dental-dark-blue)] hover:from-[var(--dental-dark-blue)] hover:to-[var(--dental-blue)] text-white"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Solicitud
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      className="border-[var(--dental-gold)] text-[var(--dental-gold)] hover:bg-[var(--dental-gold)] hover:text-gray-900"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    * Campos obligatorios. Tus datos están protegidos y solo serán usados para contactarte sobre tu consulta.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[var(--dental-blue)] to-[var(--dental-gold)] rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-[var(--dental-blue)] font-medium">
                            {info.value}
                          </p>
                          {info.subValue && (
                            <p className="text-gray-600 text-sm">{info.subValue}</p>
                          )}
                          <p className="text-gray-500 text-xs mt-1">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <div className="h-64 bg-gradient-to-r from-[var(--dental-light-blue)] to-[var(--dental-blue)]/20 flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[var(--dental-blue)] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Nuestra Ubicación
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Calle 5 # 38-25, Consultorio 204<br />
                      Edificio Plaza San Fernando, Cali
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[var(--dental-blue)] text-[var(--dental-blue)]"
                    >
                      Ver en Google Maps
                    </Button>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-[var(--dental-gold)]/10 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-[var(--dental-blue)]/10 rounded-full"></div>
                </div>
              </Card>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Síguenos en Redes Sociales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {socialMedia.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r hover:shadow-md transition-all duration-300"
                        style={{
                          background: `linear-gradient(to right, var(--dental-light-blue), white)`
                        }}
                      >
                        <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center`}>
                          <span className="text-white font-bold text-sm">
                            {social.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{social.name}</p>
                          <p className="text-sm text-gray-600">{social.handle}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 text-center border border-red-100"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
              <Phone className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Tienes una Emergencia Dental?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ofrecemos atención de urgencias las 24 horas. No dejes que el dolor 
            dental arruine tu día, contáctanos inmediatamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergencia: 300 705 4003
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Urgente
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;