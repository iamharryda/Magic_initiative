import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaTshirt, 
  FaBook, 
  FaUtensils, 
  FaStar, 
  FaHeart,
  FaBookReader
} from 'react-icons/fa';

const MagicBoardSchool = () => {
  const features = [
    {
      title: "Quality Education",
      description: "Comprehensive curriculum integrating climate awareness and sustainability",
      icon: FaGraduationCap
    },
    {
      title: "Free Uniforms",
      description: "Every student receives school uniforms to foster dignity and belonging",
      icon: FaTshirt
    },
    {
      title: "Learning Materials",
      description: "Books, supplies, and educational resources provided free of cost",
      icon: FaBook
    },
    {
      title: "Mid-Day Meals",
      description: "Nutritious meals ensuring proper nutrition for student development",
      icon: FaUtensils
    },
    {
      title: "Holistic Development",
      description: "Focus on academic, physical, and emotional growth of children",
      icon: FaStar
    },
    {
      title: "Community Impact",
      description: "Creating pathways for underprivileged children to dream and succeed",
      icon: FaHeart
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
              Program 01
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Magic Board <span className="text-[#7b1e1e]">School</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Providing quality education to underprivileged children while embedding climate awareness into learning
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
                  <FaBookReader className="text-5xl text-[#7b1e1e]" />
                </motion.div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Our <span className="text-[#7b1e1e]">Mission</span>
                </h2>

                <div className="h-1 w-20 bg-[#7b1e1e] mb-6"></div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  The Magic Board School is dedicated to providing quality education to underprivileged children, integrating climate education into the curriculum. Established in April 2023, we empower the younger generation with the knowledge and skills to address environmental challenges.
                </p>

                <p className="text-base sm:text-lg text-[#7b1e1e] font-semibold mt-6">
                  We foster hope and opportunity for children facing limited prospects due to socio-economic barriers.
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
                  src="https://i.ibb.co/S4gvZNqN/children-Teacher-Raising-Hand.jpg"
                  alt="Magic Board School Students"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block mb-4 px-4 py-2 bg-[#7b1e1e]/10 border border-[#7b1e1e] rounded-full text-[#7b1e1e] font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive <span className="text-[#7b1e1e]">Support</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Ensuring every child has the opportunity to learn and thrive
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white border border-[#7b1e1e]/30 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-4">
                    <IconComponent className="text-5xl text-[#7b1e1e]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#4a0e0e]">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-24 bg-[#f8f5f3]">
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
                  src="https://i.ibb.co/35mmDRcD/distribution2.jpg"
                  alt="Students learning"
                  className="w-full h-full object-cover"
                />
              </div>
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
                  <FaStar className="text-5xl text-[#7b1e1e]" />
                </motion.div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Our <span className="text-[#7b1e1e]">Vision</span>
                </h2>

                <div className="h-1 w-20 bg-[#7b1e1e] mb-6"></div>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  We envision a future where every child has access to quality education and the opportunity to dream, learn, and succeed regardless of their socio-economic background.
                </p>

                <p className="text-base sm:text-lg text-[#7b1e1e] font-semibold mt-6">
                  Through education and holistic development, we nurture future leaders who will address global challenges.
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
              Help Us Empower{" "}
              <span className="text-yellow-300">More Children</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-100 mb-8">
              Your support transforms lives, giving underprivileged children access to quality education and a brighter future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#donate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-[#4a0e0e] font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
              >
                Donate Now
              </motion.a>

              <motion.a
                href="#sponsor"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-[#7b1e1e] px-8 py-4 rounded-full font-bold transition-all duration-300"
              >
                Sponsor a Child
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MagicBoardSchool;