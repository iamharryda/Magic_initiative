import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote: "Now I can dream of becoming a teacher. Magic Board School gave me hope for a better future.",
    author: "Raisa",
    role: "Student, Age 8",
    image: "https://i.ibb.co/MxSFCsq9/raisa.jpg",
  },
  {
    quote: "This school has changed our community. Our children now have opportunities we never imagined possible.",
    author: "Parent from Nazirartek",
    role: "Community Member",
    image: "https://i.ibb.co/hT3rj9h/parent.jpg",
  },
  {
    quote: "Being part of MAGIC Initiative has shown me the true power of education to transform lives.",
    author: "Volunteer Teacher",
    role: "Magic Board School",
    image: "https://i.ibb.co/609m419t/Abid.png",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next"); // "next" | "prev"

  const total = testimonials.length;

  const goTo = useCallback(
    (index, dir) => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((index + total) % total);
        setAnimating(false);
      }, 350);
    },
    [animating, total]
  );

  const next = () => goTo(current + 1, "next");
  const prev = () => goTo(current - 1, "prev");

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current, animating]);

  const t = testimonials[current];

  return (
    <section className="py-20 bg-[#fdf5f5]">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#c4908f] mb-3">
            Voices of Change
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#800000] leading-tight">
            Stories That Inspire Us
          </h2>
          <div className="mx-auto mt-4 w-12 h-1 rounded-full bg-[#800000]" />
        </div>

        {/* Card */}
        <div className="relative">
          <div
            className={`bg-white rounded-3xl shadow-[0_8px_40px_rgba(128,0,0,0.1)] border border-[#f5e0e0] overflow-hidden transition-all duration-350 ${
              animating
                ? direction === "next"
                  ? "opacity-0 translate-x-6"
                  : "opacity-0 -translate-x-6"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="flex flex-col sm:flex-row">

              {/* Left — image strip */}
              <div className="sm:w-52 shrink-0 bg-gradient-to-br from-[#800000] to-[#5a0000] flex flex-col items-center justify-center p-8 gap-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#f5c0c0]/40 shadow-lg">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentNode.classList.add(
                        "bg-[#fde8e8]",
                        "flex",
                        "items-center",
                        "justify-center"
                      );
                    }}
                  />
                </div>
                <div className="text-center">
                  <p className="text-[#fde8e8] font-bold text-sm leading-tight">{t.author}</p>
                  <p className="text-[#f5c0c0] text-xs mt-1 leading-tight">{t.role}</p>
                </div>
              </div>

              {/* Right — quote */}
              <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center gap-6">
                <FaQuoteLeft className="text-[#e8c8c8] text-4xl" aria-hidden="true" />
                <blockquote className="text-[#3b1a1a] text-base sm:text-lg leading-relaxed font-medium italic">
                  "{t.quote}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-[#e8c8c8] text-[#800000] flex items-center justify-center shadow-md hover:bg-[#800000] hover:text-[#fde8e8] hover:border-[#800000] hover:scale-110 active:scale-95 transition-all duration-200"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-[#e8c8c8] text-[#800000] flex items-center justify-center shadow-md hover:bg-[#800000] hover:text-[#fde8e8] hover:border-[#800000] hover:scale-110 active:scale-95 transition-all duration-200"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-[#800000]"
                  : "w-2.5 h-2.5 bg-[#e8c8c8] hover:bg-[#c4908f]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}