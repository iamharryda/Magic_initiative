import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#7b1e1e] text-white py-10 px-6 text-center">
      {/* Main text */}
      <p className="font-medium text-base sm:text-lg">
        © 2025 MAGIC Initiative — Building Climate-Resilient Futures
      </p>

      {/* Location & Contact */}
      <div className="mt-5 space-y-3 text-sm sm:text-base text-gray-100 max-w-3xl mx-auto">
        <p className="flex items-center justify-center gap-2 leading-relaxed">
          <FaMapMarkerAlt className="text-white/90" />
          Ground floor of Khadiza Bhaban, Rumairchora, Cox’s Bazar — opposite
          Cox’s Bazar Hashemia Kamil Master’s Madrasa.
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaPhoneAlt className="text-white/90" />
          <span>+880 1643-196126,&nbsp;+880 1878-554154</span>
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaEnvelope className="text-white/90" />
          <a
            href="mailto:info@magicinitiative.org"
            className="underline hover:text-gray-200 transition-colors"
          >
            info@magicinitiative.org
          </a>
        </p>
      </div>

      {/* Divider */}
      <div className="my-6 mx-auto w-24 h-[1px] bg-gray-300/30"></div>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <a
          href="https://www.facebook.com/share/1G66vFm4nf/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-200 transition-colors text-sm sm:text-base"
        >
          <FaFacebookF className="text-lg" /> Facebook
        </a>
        <a
          href="https://www.instagram.com/magicinitiative/?utm_source=qr&igsh=MWtpczV0amtrdjEyYg%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-200 transition-colors text-sm sm:text-base"
        >
          <FaInstagram className="text-lg" /> Instagram
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-200 transition-colors text-sm sm:text-base"
        >
          <FaLinkedinIn className="text-lg" /> LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
