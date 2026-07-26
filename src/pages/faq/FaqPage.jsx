import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    category: "About MAGIC Initiative",
    items: [
      {
        q: "What is MAGIC Initiative?",
        a: "The MAGIC Initiative is a non-profit organization dedicated to empowering communities to achieve a just, sustainable, and equitable future. By collaborating with youth leaders and grassroots actors, we transform challenges into opportunities for resilience, growth, and innovation. Through a combination of knowledge, strategic partnerships, and actionable solutions, we translate ideas into tangible, real-world impact.",
      },
      {
        q: "What does MAGIC stand for?",
        a: "MAGIC stands for Mission for Advancing Academic Growth, Innovation & Climate-Resilient Communities. It reflects our core commitment to education, innovation, and sustainability in the communities we serve.",
      },
      {
        q: "What is MAGIC Initiative's mission?",
        a: "We strengthen communities by empowering children, youth, and women through inclusive and innovative programs that improve education, health and well-being, create sustainable livelihoods, advance climate action, and build peace and social cohesion.",
      },
      {
        q: "What is MAGIC Initiative's vision?",
        a: "A just, resilient, and empowered society where everyone has the opportunity to learn, thrive, and contribute to a sustainable future.",
      },
      {
        q: "Where is MAGIC Initiative based?",
        a: "MAGIC Initiative is based at Khadija Bhaban (Ground Floor), North Rumaliarchara, opposite Cox's Bazar Hashemia Kamil Madrasha, Main Road, Sadar Cox's Bazar-4700, Bangladesh.",
      },
    ],
  },
  {
    category: "Our Work & Focus Areas",
    items: [
      {
        q: "What does MAGIC Initiative do?",
        a: "At the MAGIC Initiative, we work to advance climate justice, quality education, and sustainable development by empowering communities — especially youth, women, and marginalized groups. Through education, capacity building, research, and advocacy, we connect grassroots action with evidence-based solutions to create climate-resilient, inclusive, and sustainable futures.",
      },
      {
        q: "What are MAGIC Initiative's focus areas?",
        a: "Our eight focus areas are: (1) Education and Digital Learning, (2) Youth and Skill Development, (3) Empowerment, (4) Health and Well-being, (5) Emergency Response, (6) Climate Action, (7) Research, Innovation and Entrepreneurship, and (8) Peace, Justice and Democracy.",
      },
      {
        q: "What is Magic Board School?",
        a: "Magic Board School is MAGIC Initiative's flagship education project, supporting climate-displaced children in Nazirartek, Cox's Bazar. It provides quality education and creates opportunities for children and youth to build just and sustainable futures.",
      },
      {
        q: "Which UN Sustainable Development Goals does MAGIC Initiative align with?",
        a: "MAGIC Initiative's work aligns with multiple SDGs including SDG 3 (Good Health and Well-being), SDG 4 (Quality Education), SDG 5 (Gender Equality), SDG 8 (Decent Work and Economic Growth), SDG 9 (Industry, Innovation and Infrastructure), SDG 13 (Climate Action), SDG 16 (Peace, Justice and Strong Institutions), and SDG 17 (Partnerships for the Goals).",
      },
    ],
  },
  {
    category: "Core Values",
    items: [
      {
        q: "What are MAGIC Initiative's core values?",
        a: "The MAGIC Initiative is built on eight core values: (1) Sustainability, (2) Innovation, (3) Education & Knowledge Sharing, (4) Community Empowerment, (5) Integrity & Accountability, (6) Equity & Inclusion, (7) Peace & Social Harmony, and (8) Well-being & Human Dignity.",
      },
      {
        q: "How does MAGIC Initiative ensure accountability?",
        a: "Integrity and accountability are among our foundational core values. We are committed to transparent operations, responsible use of resources, and reporting our impact honestly to our partners, donors, and the communities we serve.",
      },
    ],
  },
  {
    category: "Get Involved & Support",
    items: [
      {
        q: "How can I support MAGIC Initiative?",
        a: "You can support us by sponsoring a child's education, making a general donation, volunteering your time and skills, or partnering with us as an organization. Every contribution — big or small — helps transform challenges into hope for the communities we serve.",
      },
      {
        q: "How can I contact MAGIC Initiative?",
        a: "You can reach us by email at magic.initiativebd@gmail.com or info@magicinitiative.org, by phone at (+880) 1805-534775, or visit our website at www.magicinitiative.org. You can also find us on Facebook, Instagram, and LinkedIn under @MAGICInitiative.",
      },
      {
        q: "How can my organization partner with MAGIC Initiative?",
        a: "We welcome partnerships with organizations that share our values of sustainability, equity, and community empowerment. Please reach out to us via email at magic.initiativebd@gmail.com to discuss potential collaboration opportunities.",
      },
      {
        q: "Can I volunteer with MAGIC Initiative?",
        a: "Yes! We are always looking for passionate volunteers who want to make a difference. Whether you're a teacher, researcher, communicator, or community organizer, there's a place for you at MAGIC Initiative. Visit our Get Involved page or contact us directly to learn more.",
      },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? "border-[#800000]/40 shadow-[0_4px_20px_rgba(128,0,0,0.08)]" : "border-[#f0dada]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-[#fdf8f8] transition-colors duration-200"
        aria-expanded={open}
      >
        <span className={`text-sm sm:text-base font-semibold leading-snug ${open ? "text-[#800000]" : "text-[#3b1a1a]"}`}>
          {q}
        </span>
        <span className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
          open ? "bg-[#800000] text-[#fde8e8]" : "bg-[#fdf0f0] text-[#800000]"
        }`}>
          <FaChevronDown className={`text-xs transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-1 bg-white">
              <div className="w-full h-px bg-[#f0dada] mb-4" />
              <p className="text-[#5a1a1a] text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#fdf5f5] font-sans">

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#800000] via-[#6b0000] to-[#5a0000] px-6 py-16 sm:py-24 text-center">
        <motion.p
          className="text-[#f5c0c0] text-xs font-bold tracking-[0.25em] uppercase mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Educate · Empower · Sustain · Unite
        </motion.p>
        <motion.h1
          className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p
          className="text-[#fde8e8]/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Everything you need to know about MAGIC Initiative — our mission, work, values, and how you can be part of the change.
        </motion.p>
      </div>

      {/* FAQ body */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20 flex flex-col gap-12">
        {faqs.map((section, si) => (
          <motion.div
            key={si}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: si * 0.08 }}
            viewport={{ once: true }}
          >
            {/* Category heading */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-7 rounded-full bg-[#800000]" />
              <h2 className="text-lg sm:text-xl font-bold text-[#800000]">{section.category}</h2>
            </div>

            <div className="flex flex-col gap-3">
              {section.items.map((item, ii) => (
                <FAQItem key={ii} q={item.q} a={item.a} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-[#800000] to-[#5a0000] p-8 sm:p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#f5c0c0] text-xs font-bold tracking-[0.2em] uppercase mb-3">Still have questions?</p>
          <h3 className="text-white text-xl sm:text-2xl font-extrabold mb-2">We'd love to hear from you</h3>
          <p className="text-[#fde8e8]/75 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
            Reach out to us and our team will get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="mailto:magic.initiativebd@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-white text-[#800000] font-bold px-7 py-3 text-sm hover:bg-[#fde8e8] transition-colors duration-200"
            >
              Email Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#f5c0c0]/50 text-[#fde8e8] font-bold px-7 py-3 text-sm hover:bg-white/10 transition-colors duration-200"
            >
              Contact Page
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}