"use client";

import { motion } from "framer-motion";
import { 
  FaSeedling, 
  FaLightbulb, 
  FaBook, 
  FaHandsHelping, 
  FaCheckCircle, 
  FaBalanceScale,
  FaDove,
  FaHeart
} from "react-icons/fa";

const CoreValuesPage = () => {
  const coreValues = [
    {
      number: "01",
      title: "Sustainability",
      description:
        "We are committed to promoting environmental stewardship and sustainable practices in education, innovation, and community development.",
      icon: FaSeedling,
      color: "from-[#7b1e1e]/10 to-[#5a1414]/10",
    },
    {
      number: "02",
      title: "Innovation",
      description:
        "We embrace creativity and forward-thinking solutions to address climate challenges, fostering a culture of research, technology, and entrepreneurship.",
      icon: FaLightbulb,
      color: "from-[#7b1e1e]/10 to-[#611515]/10",
    },
    {
      number: "03",
      title: "Education & Knowledge Sharing",
      description:
        "We believe in the transformative power of education and prioritize knowledge dissemination to empower individuals and communities.",
      icon: FaBook,
      color: "from-[#7b1e1e]/10 to-[#5a1414]/10",
    },
    {
      number: "04",
      title: "Community Empowerment",
      description:
        "We work collaboratively with local communities, ensuring inclusive participation and leadership in climate resilience and sustainable development initiatives.",
      icon: FaHandsHelping,
      color: "from-[#7b1e1e]/10 to-[#611515]/10",
    },
    {
      number: "05",
      title: "Integrity & Accountability",
      description:
        "We uphold transparency, ethical practices, and accountability in all our activities, ensuring that our work is impactful and responsible.",
      icon: FaCheckCircle,
      color: "from-[#7b1e1e]/10 to-[#5a1414]/10",
    },
    {
      number: "06",
      title: "Equity & Inclusion",
      description:
        "Communities have access to education, resources, and opportunities regardless of background, ensuring equal opportunities for all.",
      icon: FaBalanceScale,
      color: "from-[#7b1e1e]/10 to-[#611515]/10",
    },
    {
      number: "07",
      title: "Peace & Social Harmony",
      description:
        "Building peaceful, cohesive communities grounded in respect, justice, and mutual cooperation.",
      icon: FaDove,
      color: "from-[#7b1e1e]/10 to-[#5a1414]/10",
    },
    {
      number: "08",
      title: "Well-being & Human Dignity",
      description:
        "Supporting holistic health, mental wellness, and dignified work opportunities for all individuals.",
      icon: FaHeart,
      color: "from-[#7b1e1e]/10 to-[#611515]/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-stone-50 text-gray-800 min-h-screen">
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
              className="inline-block mb-4 sm:mb-6 px-4 py-2 bg-[#7b1e1e]/10 border border-[#7b1e1e] rounded-full text-[#7b1e1e] font-semibold text-sm uppercase tracking-wider"
            >
              What Defines Us
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#4a0e0e] mb-6">
              Our Core <span className="text-[#7b1e1e]">Values</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              These values define MAGIC and drive our commitment to creating a
              future where academic excellence, innovation, and climate
              resilience go hand in hand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid Section */}
      <section className="py-16 sm:py-24 bg-[#f8f5f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 lg:gap-10"
          >
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative"
                >
                  <div
                    className={`bg-gradient-to-br ${value.color} p-8 sm:p-10 lg:p-12 rounded-2xl border border-[#7b1e1e]/30 backdrop-blur-sm hover:border-[#7b1e1e]/60 transition-all duration-300 h-full`}
                  >
                    <div className="absolute top-6 right-6 text-6xl sm:text-7xl font-bold text-[#7b1e1e]/10 group-hover:text-[#7b1e1e]/30 transition-all duration-300">
                      {value.number}
                    </div>

                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="inline-block mb-6 p-4 bg-[#7b1e1e]/10 rounded-2xl group-hover:bg-[#7b1e1e]/20 transition-all duration-300"
                    >
                      <IconComponent className="text-5xl sm:text-6xl text-[#7b1e1e]" />
                    </motion.div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4a0e0e] mb-4 group-hover:text-[#7b1e1e] transition-colors duration-300">
                      {value.title}
                    </h3>

                    <div className="h-1 w-16 bg-[#7b1e1e] mb-6 group-hover:w-24 transition-all duration-300"></div>

                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-[#7b1e1e]/10 to-[#611515]/10 p-8 sm:p-12 lg:p-16 rounded-3xl border border-[#7b1e1e]/30 backdrop-blur-sm">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="inline-block mb-6 p-5 bg-[#7b1e1e]/10 rounded-full"
              >
                <span className="text-6xl">🎯</span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4a0e0e] mb-6">
                Living Our <span className="text-[#7b1e1e]">Values</span> Every Day
              </h2>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                At MAGIC Initiative, our values aren't just words on a page—they
                guide every decision we make, every program we implement, and every
                life we touch. From the classrooms of Magic Board School to our
                climate action initiatives, these principles shape our approach to
                building a more sustainable and equitable world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects / Action Section */}
      <section className="py-16 sm:py-24 bg-[#f8f5f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#7b1e1e] to-[#5a1414] text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Share Our <span className="text-yellow-300">Values</span>?
            </h2>

            <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join us in building a future where education, innovation, and
              sustainability create lasting change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#get-involved"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-4 rounded-full shadow-lg transition-all duration-300"
              >
                Get Involved
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-[#7b1e1e] px-10 py-4 rounded-full font-bold transition-all duration-300"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CoreValuesPage;