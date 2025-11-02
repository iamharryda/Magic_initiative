import React from 'react';
import { motion } from 'framer-motion';

const HealthWellbeingPage = () => {
  const stats = [
    { num: "200+", label: "Beneficiaries" },
    { num: "10+", label: "Health Sessions" },
    { num: "Monthly", label: "Check-ups" }
  ];

  const services = [
    {
      title: "Climate-Resilient Health",
      description: "Health interventions addressing nutrition, sanitation, and climate-induced health risks",
      icon: "🏥"
    },
    {
      title: "Nutrition Programs",
      description: "Awareness and support for proper nutrition and balanced diets for healthy communities",
      icon: "🥗"
    },
    {
      title: "Mental Health Support",
      description: "Mental health awareness and well-being programs for climate-affected communities",
      icon: "🧠"
    },
    {
      title: "Preventive Healthcare",
      description: "Education on preventive healthcare measures and disease prevention strategies",
      icon: "💉"
    },
    {
      title: "Sanitation & Hygiene",
      description: "Promoting proper sanitation practices and hygiene education in communities",
      icon: "🚿"
    },
    {
      title: "Community Wellness",
      description: "Holistic health programs linking environmental sustainability with community health",
      icon: "❤️"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="bg-[#f8f5f3] text-[#4a0e0e] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-100 via-[#f8f5f3] to-stone-50 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(123,30,30,0.1)_50%,transparent_75%)] bg-[length:40px_40px] animate-[slide_20s_linear_infinite]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-4 px-4 py-2 bg-[#7b1e1e]/10 border border-[#7b1e1e] rounded-full text-[#7b1e1e] font-semibold text-sm uppercase tracking-wider"
            >
              Program 06
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Health & <span className="text-[#7b1e1e]">Well-being</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Promoting sustainable health solutions that strengthen resilience against climate-induced risks
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-[#f8f5f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-[#7b1e1e]/10 to-[#5a1414]/10 p-8 sm:p-10 lg:p-12 rounded-2xl border border-[#7b1e1e]/30 backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className="inline-block mb-6 p-4 bg-[#7b1e1e]/10 rounded-full"
                >
                  <span className="text-5xl">🏥</span>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Our <span className="text-[#7b1e1e]">Mission</span>
                </h2>

                <div className="h-1 w-20 bg-[#7b1e1e] mb-6"></div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Promoting sustainable health solutions that strengthen resilience against climate-induced risks. Supporting access to essential healthcare services and awareness on mental health and well-being in climate-affected areas.
                </p>

                <p className="text-base sm:text-lg text-[#7b1e1e] font-semibold mt-6">
                  We link environmental sustainability with holistic community health for lasting well-being.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-[#7b1e1e]/30 shadow-lg">
                <img
                  src="https://i.ibb.co/xSQstdvf/health2.jpg"
                  alt="Health and Well-being"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-[#7b1e1e] text-white p-6 rounded-xl shadow-xl"
              >
                <p className="text-4xl font-bold">200+</p>
                <p className="text-sm">Beneficiaries</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-[#7b1e1e]">Impact</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Improving community health through preventive care and wellness programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-[#7b1e1e]/30 rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all"
              >
                <p className="text-4xl font-bold text-[#7b1e1e] mb-2">{stat.num}</p>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-[#f8f5f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block mb-4 px-4 py-2 bg-[#7b1e1e]/10 border border-[#7b1e1e] rounded-full text-[#7b1e1e] font-semibold text-sm uppercase tracking-wider">
              Health Services
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-[#7b1e1e]">Programs</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive health initiatives for resilient communities
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white border border-[#7b1e1e]/30 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#4a0e0e]">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-[#7b1e1e]/30 shadow-lg">
                <img
                  src="https://i.ibb.co/WX1N5pw/health3.jpg"
                  alt="Community health"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-6 -left-6 bg-white border-2 border-[#7b1e1e] text-[#7b1e1e] p-6 rounded-xl shadow-xl"
              >
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm">Health Sessions</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="bg-gradient-to-br from-[#7b1e1e]/10 to-[#5a1414]/10 p-8 sm:p-10 lg:p-12 rounded-2xl border border-[#7b1e1e]/30 backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="inline-block mb-6 p-4 bg-[#7b1e1e]/10 rounded-full"
                >
                  <span className="text-5xl">🌿</span>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Our <span className="text-[#7b1e1e]">Vision</span>
                </h2>

                <div className="h-1 w-20 bg-[#7b1e1e] mb-6"></div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  We envision healthy, resilient communities where everyone has access to quality healthcare and the knowledge to maintain physical and mental well-being in the face of climate challenges.
                </p>

                <p className="text-base sm:text-lg text-[#7b1e1e] font-semibold mt-6">
                  Through holistic health approaches, we create sustainable wellness for all community members.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#7b1e1e] to-[#5a1414] text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Support Community{" "}
              <span className="text-yellow-300">Health</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-100 mb-8">
              Your contribution helps us provide essential healthcare and wellness programs to communities in need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#donate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-[#4a0e0e] font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
              >
                Support Health Programs
              </motion.a>

              <motion.a
                href="#volunteer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-[#7b1e1e] px-8 py-4 rounded-full font-bold transition-all duration-300"
              >
                Volunteer With Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthWellbeingPage;