import { motion } from "framer-motion";
import {
  FiAlertTriangle,
  FiSearch,
  FiTruck,
  FiBookOpen,
  FiActivity,
  FiHeart,
  FiUsers,
  FiClipboard,
  FiRefreshCw,
} from "react-icons/fi";

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
const activities = [
  { icon: FiSearch, title: "Rapid Needs Assessment", text: "We move fast to understand what displaced families need most, right away." },
  { icon: FiTruck, title: "Relief Distribution", text: "Delivering food, water, shelter materials, and essential supplies to affected communities." },
  { icon: FiBookOpen, title: "Temporary Learning Spaces", text: "Keeping children learning and safe even when their world is disrupted." },
  { icon: FiActivity, title: "Health & Hygiene", text: "Basic health support and hygiene awareness to prevent crisis-driven illness." },
  { icon: FiHeart, title: "Psychosocial Support", text: "Helping children and families cope, heal, and rebuild a sense of stability." },
  { icon: FiUsers, title: "Local Coordination", text: "Working with community leaders and partners so response reaches everyone." },
];

const approach = [
  { n: "01", icon: FiClipboard, title: "Prepare", text: "Build readiness with communities before disaster strikes." },
  { n: "02", icon: FiSearch, title: "Assess", text: "Identify the most urgent needs and the most vulnerable people." },
  { n: "03", icon: FiTruck, title: "Respond", text: "Deliver timely, dignified relief where it matters most." },
  { n: "04", icon: FiRefreshCw, title: "Recover", text: "Support families to rebuild and strengthen long-term resilience." },
];

function EmergencyResponsePage() {
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
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#7b1e1e]/10 border border-[#7b1e1e] rounded-full text-[#7b1e1e] font-semibold text-sm uppercase tracking-wider"
            >
              <FiAlertTriangle /> Our Focus
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Emergency <span className="text-[#7b1e1e]">Response</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            >
              When crisis hits climate-displaced communities in Cox's Bazar, we
              respond with speed, dignity, and care, keeping children safe and
              learning through the hardest moments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Overview ---------- */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Rapid Help When It <span className="text-[#7b1e1e]">Matters Most</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 leading-relaxed text-lg"
        >
          Climate shocks, floods, and displacement hit the most vulnerable
          hardest. The MAGIC Initiative stands ready to respond, protecting
          lives, restoring stability, and making sure no child's education stops
          because of an emergency.
        </motion.p>
      </section>

      {/* ---------- What We Do ---------- */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-14"
          >
            What We Do in a <span className="text-[#7b1e1e]">Crisis</span>
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activities.map((a) => (
              <motion.div
                key={a.title}
                variants={item}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl p-7 border border-[#7b1e1e]/10 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#7b1e1e] text-white flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                  <a.icon />
                </div>
                <h3 className="text-lg font-bold mb-2">{a.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------- Our Approach ---------- */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          Our Response <span className="text-[#7b1e1e]">Approach</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {approach.map((s) => (
            <motion.div key={s.n} variants={item} className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-5">
                <div className="w-16 h-16 rounded-full bg-[#7b1e1e] text-white flex items-center justify-center text-2xl shadow-lg shadow-[#7b1e1e]/25">
                  <s.icon />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border border-[#7b1e1e]/20 text-[#7b1e1e] text-xs font-bold flex items-center justify-center shadow">
                  {s.n}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default EmergencyResponsePage;