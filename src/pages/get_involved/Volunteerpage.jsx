import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHeart,
  FiAward,
  FiUsers,
  FiClock,
  FiBookOpen,
  FiActivity,
  FiAlertCircle,
  FiCamera,
  FiZap,
  FiSend,
  FiCheckCircle,
  FiMapPin,
  FiMail,
  FiPhone,
  FiGlobe,
} from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

/* ---------- Animation variants ---------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ---------- Content ---------- */
const reasons = [
  {
    icon: FiHeart,
    title: "Make Real Impact",
    text: "Directly support climate-displaced children and youth in Nazirartek, Cox's Bazar.",
  },
  {
    icon: FiAward,
    title: "Build Your Skills",
    text: "Gain hands-on experience in education, community work, research, and advocacy.",
  },
  {
    icon: FiUsers,
    title: "Join a Community",
    text: "Work alongside youth leaders and grassroots actors driving lasting change.",
  },
  {
    icon: FiClock,
    title: "Flexible Roles",
    text: "Contribute on the ground or remotely, on a schedule that fits your life.",
  },
];

const roles = [
  { icon: FiBookOpen, title: "Education & Digital Learning", text: "Teach, mentor, and build learning resources for the Magic Board School." },
  { icon: FiUsers, title: "Youth & Skill Development", text: "Run workshops and skill-building sessions for young people." },
  { icon: FiActivity, title: "Health & Well-being", text: "Support health awareness and community well-being drives." },
  { icon: FiAlertCircle, title: "Emergency Response", text: "Assist relief and rapid-response efforts for displaced families." },
  { icon: FiZap, title: "Climate Action", text: "Help deliver climate resilience and awareness programs." },
  { icon: FiCamera, title: "Media & Documentation", text: "Capture stories, photos, and content that amplify our mission." },
];

const steps = [
  { n: "01", title: "Apply", text: "Fill out the short form below and tell us your interests." },
  { n: "02", title: "Orientation", text: "Meet the team for a quick chat and introduction to our work." },
  { n: "03", title: "Get Matched", text: "We pair you with a role that fits your skills and availability." },
  { n: "04", title: "Make Impact", text: "Start contributing to real change in the community." },
];

const interests = [
  "Education & Digital Learning",
  "Youth & Skill Development",
  "Health & Well-being",
  "Emergency Response",
  "Climate Action",
  "Media & Documentation",
  "Research & Innovation",
  "Wherever I'm needed most",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white border border-[#7b1e1e]/15 text-[#4a0e0e] placeholder-gray-400 focus:outline-none focus:border-[#7b1e1e] focus:ring-2 focus:ring-[#7b1e1e]/20 transition";

function VolunteerPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    availability: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [workingVolunteers, setWorkingVolunteers] = useState([]);

  useEffect(() => {
    fetchWorkingVolunteers();
  }, []);

  const fetchWorkingVolunteers = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5006";
      const res = await fetch(`${API_URL}/api/v1/volunteer?status=working`);
      const result = await res.json();
      if (result.status || result.data) {
        const list = result.data?.data || (Array.isArray(result.data) ? result.data : result.volunteers || []);
        setWorkingVolunteers(list);
      }
    } catch (err) {
      console.error("Error fetching working volunteers", err);
    }
  };

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5006";
      const res = await fetch(`${API_URL}/api/v1/volunteer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: form.name,
          email: form.email,
          phone: form.phone,
          description: `Interest: ${form.interest} | Availability: ${form.availability} | Note: ${form.message}`,
          status: "applied"
        })
      });

      const result = await res.json();
      if (res.ok || result.status || result.data) {
        setSubmitted(true);
      } else {
        setError(result.message || "Failed to submit application.");
      }
    } catch (err) {
      console.error("Error submitting volunteer form", err);
      setError("Network error. Could not connect to backend.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f8f5f3] text-[#4a0e0e] min-h-screen">
      {/* ---------- Hero ---------- */}
      <section className="relative bg-gradient-to-br from-stone-100 via-[#f8f5f3] to-stone-50 py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(123,30,30,0.1)_50%,transparent_75%)] bg-[length:40px_40px] animate-[slide_25s_linear_infinite]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-4 px-4 py-2 bg-[#7b1e1e]/10 border border-[#7b1e1e] rounded-full text-[#7b1e1e] font-semibold text-sm uppercase tracking-wider"
            >
              Join The Movement
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Volunteer With <span className="text-[#7b1e1e]">MAGIC</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            >
              Give your time and skills to empower climate-displaced children in
              Cox's Bazar. Together we Educate, Empower, Sustain, and Unite.
            </motion.p>

            <motion.a
              href="#apply"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-[#7b1e1e] text-white rounded-full font-semibold shadow-lg shadow-[#7b1e1e]/20"
            >
              Become a Volunteer <FiHeart />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ---------- Why Volunteer ---------- */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          Why <span className="text-[#7b1e1e]">Volunteer</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-14"
        >
          Your time turns challenges into opportunities for resilience, growth,
          and innovation.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-[#7b1e1e]/10 transition-shadow hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#7b1e1e]/10 flex items-center justify-center text-[#7b1e1e] text-2xl mb-5">
                <r.icon />
              </div>
              <h3 className="text-lg font-bold mb-2">{r.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------- Where You Can Help ---------- */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-14"
          >
            Where You Can <span className="text-[#7b1e1e]">Help</span>
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {roles.map((role) => (
              <motion.div
                key={role.title}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="group bg-white rounded-2xl p-7 border border-[#7b1e1e]/10 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-11 h-11 rounded-lg bg-[#7b1e1e] text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    <role.icon />
                  </div>
                  <h3 className="text-lg font-bold">{role.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {role.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------- How It Works ---------- */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          How It <span className="text-[#7b1e1e]">Works</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {steps.map((s) => (
            <motion.div key={s.n} variants={item} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#7b1e1e] text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-[#7b1e1e]/25 mb-5">
                {s.n}
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------- Application Form ---------- */}
      <section id="apply" className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-3"
          >
            Apply to <span className="text-[#7b1e1e]">Volunteer</span>
          </motion.h2>
          <p className="text-center text-gray-600 mb-10">
            Tell us a little about yourself and how you'd like to help.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-[#7b1e1e]/10"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="w-20 h-20 mx-auto rounded-full bg-[#7b1e1e]/10 flex items-center justify-center text-[#7b1e1e] text-4xl mb-6"
                  >
                    <FiCheckCircle />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your application. Our team will reach out to
                    you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Full name"
                      className={inputClass}
                    />
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Email address"
                      className={inputClass}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className={inputClass}
                    />
                    <input
                      name="availability"
                      value={form.availability}
                      onChange={handleChange}
                      placeholder="Availability (e.g. weekends)"
                      className={inputClass}
                    />
                  </div>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    required
                    className={`${inputClass} ${
                      form.interest ? "text-[#4a0e0e]" : "text-gray-400"
                    }`}
                  >
                    <option value="" disabled>
                      Area of interest
                    </option>
                    {interests.map((i) => (
                      <option key={i} value={i} className="text-[#4a0e0e]">
                        {i}
                      </option>
                    ))}
                  </select>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Why do you want to volunteer with us?"
                    className={`${inputClass} resize-none`}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-[#7b1e1e] text-white rounded-xl font-semibold shadow-lg shadow-[#7b1e1e]/20"
                  >
                    Submit Application <FiSend />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}

/* ---------- Shared contact footer ---------- */
function ContactStrip() {
  return (
    <section className="bg-[#7b1e1e] text-white py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start gap-3">
          <FiMapPin className="text-xl mt-1 shrink-0" />
          <p className="text-sm leading-relaxed text-white/90">
            Khadija Bhaban (Ground Floor), North Rumaliarchara, Main Road, Sadar
            Cox's Bazar-4700, Bangladesh.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <a href="mailto:magic.initiativebd@gmail.com" className="flex items-center gap-3 hover:text-white/70 transition">
            <FiMail className="text-lg" /> magic.initiativebd@gmail.com
          </a>
          <a href="tel:+8801805534775" className="flex items-center gap-3 hover:text-white/70 transition">
            <FiPhone className="text-lg" /> (+880) 1805-534775
          </a>
          <a href="https://www.magicinitiative.org" className="flex items-center gap-3 hover:text-white/70 transition">
            <FiGlobe className="text-lg" /> www.magicinitiative.org
          </a>
        </div>
        <div className="flex items-start gap-4 md:justify-end">
          {[
            { icon: FaFacebookF, href: "https://www.facebook.com/MAGICInitiative" },
            { icon: FaInstagram, href: "https://www.instagram.com/magicinitiative" },
            { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/magic-initiative" },
          ].map((s, idx) => (
            <motion.a
              key={idx}
              href={s.href}
              whileHover={{ scale: 1.15, y: -3 }}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-lg transition-colors"
            >
              <s.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VolunteerPage;
