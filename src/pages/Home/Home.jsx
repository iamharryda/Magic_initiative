"use client";

import { motion } from "framer-motion";
import { FaBook, FaSeedling, FaUsers, FaChalkboardTeacher, FaHeart, FaLeaf } from "react-icons/fa";


const HomePage = () => {
  return (
    <div className="bg-stone-50 text-gray-800">

      {/* 🌟 HERO SECTION */}
<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-stone-100">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://i.ibb.co/7FzVGZJ/DSC07903.jpg"
      alt="Children learning at Magic Board School"
      className="w-full h-full object-cover opacity-70"
    />
    {/* Soft Light Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#7b1e1e]/30 via-[#7b1e1e]/20 to-[#7b1e1e]/10"></div>
  </div>

  {/* Hero Content */}
  <motion.div
    className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
  >
    <motion.div
  className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 bg-[#a12323]/20 border border-[#a12323] rounded-full"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.3 }}
>
  {/* Pulsing Dot */}
  <motion.span
    animate={{ opacity: [1, 0.2, 1] }}
    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
    className="text-[#a12323] text-3xl leading-none"
  >
    •
  </motion.span>

  {/* Text */}
  <span className="text-[#a12323] font-semibold text-xs sm:text-sm uppercase tracking-wider">
    Making A Global Impact
  </span>
</motion.div>


    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#4a0e0e] leading-tight">
      Empowering <span className="text-[#7b1e1e]">Young Minds</span>
      <br className="hidden sm:block" />
      Building <span className="text-[#7b1e1e]">Climate-Resilient</span> Futures
    </h1>

    <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl">
      Join us in shaping a future where education and sustainability go hand in hand.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
      <motion.a
        href="#donate"
        className="bg-[#7b1e1e] hover:bg-[#611515] text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-md transition-all duration-300 text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Donate Now
      </motion.a>
      <motion.a
        href="#about"
        className="border-2 border-[#7b1e1e] text-[#7b1e1e] hover:bg-[#7b1e1e] hover:text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.a>
    </div>

    {/* Animated Stats */}
    <motion.div
      className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1 }}
    >
      {[
        { num: "60+", label: "Children Empowered" },
        { num: "5", label: "Community Programs" },
        { num: "1", label: "Sustainable Vision" },
      ].map((stat, i) => (
        <div
          key={i}
          className="bg-white border border-[#7b1e1e]/20 rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-all"
        >
          <p className="text-3xl font-bold text-[#7b1e1e]">{stat.num}</p>
          <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  </motion.div>
</section>


      {/* 🌿 ABOUT SECTION */}
      <section id="about" className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#7b1e1e] mb-4">About the Initiative</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded in 2023, <strong>MAGIC</strong> (Mission for Advancing Academic Growth,
              Innovation & Climate-Resilient Communities) empowers underprivileged children and
              communities through education, innovation, and sustainability.
            </p>
            <a
              href="#about-us"
              className="inline-block bg-[#7b1e1e] hover:bg-[#611515] text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
            >
              Read Our Story
            </a>
          </motion.div>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://i.ibb.co/847VQh4P/student-Raising-Hand.jpg"
              alt="MAGIC Initiative in action"
              className="w-full h-[320px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 🎓 CORE PROGRAMS */}
      <section id="programs" className="py-20 bg-[#f8f5f3]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-[#7b1e1e] mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Core Programs
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaBook />, title: "Magic Board School", desc: "Education with sustainability." },
              { icon: <FaSeedling />, title: "Climate Action", desc: "Awareness & community resilience." },
              { icon: <FaChalkboardTeacher />, title: "Vocational Training", desc: "Empowering with practical skills." },
              { icon: <FaUsers />, title: "Research & Innovation", desc: "Youth-led sustainable solutions." },
              { icon: <FaHeart />, title: "Women Empowerment", desc: "Fostering equality & leadership." },
              { icon: <FaLeaf />, title: "Health & Well-being", desc: "Sustainable community health." },
            ].map((program, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#7b1e1e]/30"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl text-[#7b1e1e] mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-700">{program.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 💫 IMPACT SECTION */}
      <section className="py-20 bg-stone-50 text-center">
        <motion.h2
          className="text-3xl font-bold text-[#7b1e1e] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Impact
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-gray-700 mb-8 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          "Now I can dream of becoming a teacher." — <strong>Raisa, Age 8</strong>
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-10 text-[#7b1e1e] font-semibold text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <p>👧 60 Students Educated</p>
          <p>📚 100+ Books Distributed</p>
          <p>🏫 1 New School Established</p>
        </motion.div>
      </section>

      {/* 🤝 PARTNERS SECTION */}
      <section className="py-20 bg-white light:bg-gray-950 text-center">
  <h3 className="text-3xl font-bold text-[#7b1e1e] mb-10">
    Our Partners
  </h3>

  <div className="flex flex-wrap justify-center items-center gap-10 opacity-90">
    <img
      src="https://i.ibb.co/Zz8t7d07/partner1.jpg"
      alt="Partner 1"
      className="h-20 sm:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
    />
    <img
      src="https://i.ibb.co/DHZ63MdT/partner3.jpg"
      alt="Partner 2"
      className="h-20 sm:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
    />
    <img
      src="https://i.ibb.co/vxmL1c20/partner4.png"
      alt="Partner 3"
      className="h-20 sm:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
    />
    <img
      src="https://i.ibb.co/7NyD8Vq0/partner2.png"
      alt="Partner 4"
      className="h-20 sm:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
    />
  </div>
</section>


      {/* 🌞 CALL-TO-ACTION */}
      <section className="py-20 bg-gradient-to-r from-[#7b1e1e] to-[#5a1414] text-center text-white">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Every Contribution Lights a Path of Hope.
        </motion.h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="#donate"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Donate Now
          </motion.a>
          <motion.a
            href="#sponsor"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#7b1e1e] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Sponsor a Child
          </motion.a>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;
