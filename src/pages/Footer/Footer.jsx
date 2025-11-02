const Footer = () => {
  return (
    <footer className="bg-[#7b1e1e] text-white py-10 text-center">
      {/* Text */}
      <p className="font-medium text-lg">
        © 2025 MAGIC Initiative — Building Climate-Resilient Futures
      </p>

      {/* Location & Contact */}
      <div className="mt-4 space-y-1 text-sm text-gray-100">
        <p>
          📍 Ground floor of Khadiza Bhaban, Rumairchora, Cox’s Bazar — opposite Cox’s Bazar Hashemia Kamil Master’s Madrasa.
        </p>
        <p>📞 +880&nbsp;1643-196126,&nbsp;+880&nbsp;1878-554154</p>
        <p>
          ✉️{" "}
          <a
            href="mailto:info@magicinitiative.org"
            className="underline hover:text-gray-200 transition-colors"
          >
            info@magicinitiative.org
          </a>
        </p>
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-6 mt-5">
        <a
          href="https://www.facebook.com/share/1G66vFm4nf/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/magicinitiative/?utm_source=qr&igsh=MWtpczV0amtrdjEyYg%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors"
        >
          Instagram
        </a>
        <a
          href="#"
          className="hover:text-gray-200 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
