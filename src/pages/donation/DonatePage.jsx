import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ---------- Config ---------- */
const CURRENCY = "$"; // display symbol; set matching currency in your Stripe session
const presets = [10, 20, 50, 100];

function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");

  const amount = customAmount ? Number(customAmount) : selectedAmount;
  const validAmount = amount && amount > 0 && email;

  const handleDonate = async () => {
    if (!validAmount) return;

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5006";
      const res = await fetch(`${API_URL}/api/v1/donation/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          amount, 
          donorEmail: email,
          successUrl: window.location.origin + "/donate/success?session_id={CHECKOUT_SESSION_ID}",
          returnUrl: window.location.origin + "/donate/cancel"
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to initialize checkout.");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      alert("Error connecting to the server.");
    }
  };

  return (
    <div className="bg-[#f8f5f3] text-[#4a0e0e] min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: heading + amounts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
              Help our children to{" "}
              <span className="text-[#7b1e1e]">make their lives better.</span>
            </h1>
            <p className="text-gray-600 max-w-md leading-relaxed mb-10">
              Your support is important to our mission of providing education and
              empowerment to underprivileged children in Bangladesh.
            </p>

            {/* Preset amounts (stacked) */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              className="flex flex-col gap-4 max-w-xs"
            >
              {presets.map((p) => {
                const active = !customAmount && selectedAmount === p;
                return (
                  <motion.button
                    key={p}
                    variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setSelectedAmount(p);
                      setCustomAmount("");
                    }}
                    className={`py-3.5 rounded-full font-bold border-2 transition-colors ${
                      active
                        ? "bg-[#7b1e1e] text-white border-[#7b1e1e]"
                        : "bg-transparent text-[#7b1e1e] border-[#7b1e1e]/40 hover:border-[#7b1e1e]"
                    }`}
                  >
                    {CURRENCY} {p}
                  </motion.button>
                );
              })}

              {/* Custom amount */}
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#7b1e1e] font-semibold">
                  {CURRENCY}
                </span>
                <input
                  type="number"
                  min="1"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Custom Amount"
                  className="w-full pl-9 pr-5 py-3.5 rounded-full bg-transparent border-2 border-[#7b1e1e]/40 text-[#4a0e0e] placeholder-[#7b1e1e]/50 font-semibold focus:outline-none focus:border-[#7b1e1e] transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="relative mt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  required
                  className="w-full px-5 py-3.5 rounded-full bg-transparent border-2 border-[#7b1e1e]/40 text-[#4a0e0e] placeholder-[#7b1e1e]/50 font-semibold focus:outline-none focus:border-[#7b1e1e] transition-colors"
                />
              </div>
            </motion.div>

            {/* Donate button */}
            <motion.button
              onClick={handleDonate}
              disabled={!validAmount}
              whileHover={validAmount ? { scale: 1.04 } : {}}
              whileTap={validAmount ? { scale: 0.96 } : {}}
              className={`mt-8 px-10 py-3.5 rounded-full font-bold text-white transition-colors ${
                validAmount
                  ? "bg-[#4a0e0e] hover:bg-[#7b1e1e]"
                  : "bg-[#4a0e0e]/40 cursor-not-allowed"
              }`}
            >
              Donate Now{validAmount ? ` · ${CURRENCY}${amount}` : ""}
            </motion.button>
          </motion.div>

          {/* Right: promo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
          >
            {/* Replace /donate-promo.jpg with your own image (in /public) */}
            <img
              src="/childrenWithDress.jpg"
              alt="Support children in need"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4a0e0e]/90 via-[#4a0e0e]/50 to-transparent" />
            <div className="relative h-full flex flex-col justify-center p-8 sm:p-10 max-w-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-5">
                Transform the lives of children in need
              </h2>
              <Link
                to="/#about"
                className="inline-block w-fit px-6 py-2.5 rounded-full bg-white text-[#7b1e1e] font-bold text-sm hover:bg-stone-100 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default DonatePage;