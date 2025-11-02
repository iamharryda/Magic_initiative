"use client";

import React from "react";
import { motion } from "framer-motion";

const ImpactPage = () => {
  const impactStats = [
    {
      number: "60+",
      label: "Children Empowered",
      icon: "👧",
      description:
        "Students receiving quality education at Magic Board School",
    },
    {
      number: "100+",
      label: "Books Distributed",
      icon: "📚",
      description:
        "Educational materials provided to underprivileged children",
    },
    {
      number: "5",
      label: "Core Programs",
      icon: "🎯",
      description: "Comprehensive initiatives driving community change",
    },
    {
      number: "1",
      label: "School Established",
      icon: "🏫",
      description: "Magic Board School serving the Nazirartek community",
    },
    {
      number: "20+",
      label: "Volunteers",
      icon: "🤝",
      description: "Dedicated individuals making a difference",
    },
    {
      number: "2",
      label: "Years of Impact",
      icon: "⏱️",
      description: "Since founding in 2023, creating lasting change",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Foundation & First Steps",
      events: [
        {
          month: "April",
          description: "Magic Board School opens with 30 children",
          image: "https://i.ibb.co/S4gvZNqN/children-Teacher-Raising-Hand.jpg",
        },
        {
          month: "July",
          description: "First educational materials distribution",
          image: "https://i.ibb.co/nqrPnW0g/accesories.jpg",
        },
        {
          month: "August",
          description:
            "School uniform distribution - dignity for every child",
          image: "https://i.ibb.co/bRmD9Z9X/children-With-Dress.jpg",
        },
        {
          month: "December",
          description: "Victory Day Festival - celebrating national pride",
          image: "https://i.ibb.co/DgfwMSc2/victory-Day.jpg",
        },
      ],
    },
    {
      year: "2024",
      title: "Growth & Innovation",
      events: [
        {
          month: "January",
          description: "Book Festival - igniting love for learning",
          image: "https://i.ibb.co/0R9zxmf8/book-Distribution.jpg",
        },
        {
          month: "February",
          description: "School transformation with colorful walls",
          image: "https://i.ibb.co/rK5Y3rVR/beautiful-walls.jpg",
        },
        {
          month: "September",
          description: "Mid-day meal program launched",
          image: "https://i.ibb.co/N6vZt4M1/childre-Eating.jpg",
        },
        {
          month: "November",
          description: "COP29 representation in Baku, Azerbaijan",
          image: "https://i.ibb.co/1GXgD1zs/cop29.jpg",
        },
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "Now I can dream of becoming a teacher. Magic Board School gave me hope for a better future.",
      author: "Raisa",
      role: "Student, Age 8",
      image: "https://i.ibb.co/MxSFCsq9/raisa.jpg",
    },
    {
      quote:
        "This school has changed our community. Our children now have opportunities we never imagined possible.",
      author: "Parent from Nazirartek",
      role: "Community Member",
      image: "https://i.ibb.co/hT3rj9h/parent.jpg",
    },
    {
      quote:
        "Being part of MAGIC Initiative has shown me the true power of education to transform lives.",
      author: "Volunteer Teacher",
      role: "Magic Board School",
      image: "https://i.ibb.co/609m419t/Abid.png",
    },
  ];

  const programs = [
    {
      title: "Magic Board School",
      impact: "60+ students receiving quality education",
      description:
        "Providing comprehensive education with climate awareness integrated into the curriculum",
      image: "https://i.ibb.co/S4gvZNqN/children-Teacher-Raising-Hand.jpg",
      highlights: [
        "Daily classes",
        "Free uniforms",
        "Educational materials",
        "Mid-day meals",
      ],
    },
    {
      title: "Climate Action",
      impact: "Community-wide awareness campaigns",
      description:
        "Empowering communities to take action against climate change through education and advocacy",
      image: "https://i.ibb.co/cc10PCWP/vocational2.jpg",
      highlights: [
        "Workshops",
        "Tree planting",
        "Sustainable practices",
        "Youth leadership",
      ],
    },
    {
      title: "Vocational Training",
      impact: "Skills development for sustainable livelihoods",
      description:
        "Equipping youth and marginalized communities with practical skills for economic empowerment",
      image: "https://i.ibb.co/9mYvxM5S/health.jpg",
      highlights: [
        "Technical training",
        "Entrepreneurship",
        "Job readiness",
        "Life skills",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
              Measuring Our Success
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#4a0e0e] mb-6">
              Our <span className="text-[#7b1e1e]">Impact</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Every number represents a life touched, a dream empowered, and a
              community transformed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 sm:py-24 bg-[#f8f5f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white border border-[#7b1e1e]/20 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-6xl mb-4">{stat.icon}</div>
                <h3 className="text-4xl sm:text-5xl font-bold text-[#7b1e1e] mb-2">
                  {stat.number}
                </h3>
                <p className="text-xl font-semibold text-[#4a0e0e] mb-3">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4a0e0e] mb-4">
              Program <span className="text-[#7b1e1e]">Impact</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Our initiatives create lasting change across multiple dimensions.
            </p>
          </motion.div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="aspect-video rounded-2xl overflow-hidden border-4 border-[#7b1e1e]/30 shadow-xl">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="bg-gradient-to-br from-[#7b1e1e]/10 to-[#611515]/10 p-8 rounded-2xl border border-[#7b1e1e]/30">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#4a0e0e] mb-3">
                      {program.title}
                    </h3>
                    <p className="text-[#7b1e1e] font-semibold mb-4 text-lg">
                      {program.impact}
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {program.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-700">
                          <span className="text-[#7b1e1e]">✓</span>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 bg-[#f8f5f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4a0e0e] mb-4">
              Our <span className="text-[#7b1e1e]">Journey</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Key milestones that shaped our impact.
            </p>
          </motion.div>

          <div className="space-y-16">
            {milestones.map((milestone, yearIndex) => (
              <motion.div
                key={yearIndex}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-5xl sm:text-6xl font-bold text-[#7b1e1e]">
                    {milestone.year}
                  </h3>
                  <div className="flex-1 h-1 bg-gradient-to-r from-[#7b1e1e] to-transparent"></div>
                </div>
                <p className="text-xl text-gray-600 mb-8">{milestone.title}</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {milestone.events.map((event, eventIndex) => (
                    <motion.div
                      key={eventIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: eventIndex * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white border border-[#7b1e1e]/20 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="aspect-video bg-gray-100 relative overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.description}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-[#7b1e1e] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {event.month}
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4a0e0e] mb-4">
              Stories of <span className="text-[#7b1e1e]">Change</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Hear directly from those whose lives we've touched.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-[#7b1e1e]/30 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-full bg-gray-100 mx-auto mb-4 overflow-hidden border-2 border-[#7b1e1e]/50">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6 text-center leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="text-center">
                  <p className="text-[#4a0e0e] font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-[#7b1e1e] text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 sm:py-24 bg-[#f8f5f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4a0e0e] mb-4">
              Looking <span className="text-[#7b1e1e]">Ahead</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Our vision for the next chapter.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { goal: "100+", label: "Students by 2025", icon: "🎓" },
              { goal: "10", label: "Community Programs", icon: "🌟" },
              { goal: "5", label: "Partner Schools", icon: "🤝" },
              { goal: "1000+", label: "Lives Impacted", icon: "❤️" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white border border-[#7b1e1e]/30 p-8 rounded-2xl text-center shadow-sm"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-3xl font-bold text-[#7b1e1e] mb-2">
                  {item.goal}
                </h4>
                <p className="text-[#4a0e0e] font-medium">{item.label}</p>
              </motion.div>
            ))}
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
              Be Part of Our <span className="text-yellow-300">Impact</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Your support creates real change. Join us in empowering the next
              generation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#donate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-10 py-4 rounded-full shadow-lg transition-all duration-300"
              >
                Donate Now
              </motion.a>

              <motion.a
                href="#volunteer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-[#7b1e1e] px-10 py-4 rounded-full font-bold transition-all duration-300"
              >
                Become a Volunteer
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
