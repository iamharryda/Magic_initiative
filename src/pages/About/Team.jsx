import { useState } from "react";
import TeamCarousel from "../../components/lightswind/team-carousel";
import { motion } from "framer-motion";

// Fallback avatar (maroon brand color) for members without a photo
const avatar = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=7b1e1e&color=fff&size=400&bold=true`;

const boardOfTrustees = [
  {
    id: "bot-1",
    name: "Jimran Mohammad Saiak",
    role: "Board of Trustees",
    image: "https://i.ibb.co/q3M4rdM2/Jimran.png",
    bio: "Founder of MAGIC Initiative and a founding trustee, guiding the organization's long-term vision and governance.",
  },
  {
    id: "bot-2",
    name: "Fahim Tajnowhat",
    role: "Board of Trustees",
    image: "https://i.ibb.co/5hJLL9xL/Fahim.png",
    bio: "Trustee supporting MAGIC's financial stewardship, accountability, and strategic direction.",
  },
  {
    id: "bot-3",
    name: "Mizanur Rahman",
    role: "Board of Trustees",
    image: "https://i.ibb.co/Q78dBTBn/Mizan.png",
    bio: "Trustee committed to strengthening MAGIC's community and public health mission.",
  },
  {
    id: "bot-4",
    name: "Abul Hasnat Rabbi",
    role: "Board of Trustees",
    image: "https://i.ibb.co/DHq6GYLL/Rabbi.png",
    bio: "Trustee overseeing organizational accountability and the sound implementation of MAGIC's initiatives.",
  },
  {
    id: "bot-5",
    name: "Asif Ahmad Udoy",
    role: "Board of Trustees",
    image: "https://i.ibb.co/DDHBcfMP/Udoy.png",
    bio: "Trustee focused on communications, outreach, and stakeholder engagement across MAGIC's programs.",
  },
];

const operationTeam = [
  {
    id: "op-1",
    name: "Mohammad Robiul Hasan",
    role: "Chief Executive Officer (CEO)",
    image: "/robiul.png",
    bio: "Leads MAGIC Initiative's overall strategy, operations, and organizational growth.",
  },
  {
    id: "op-2",
    name: "Abul Hasnat Rabbi",
    role: "Head of Operations & Administration",
    image: "https://i.ibb.co/DHq6GYLL/Rabbi.png",
    bio: "Manages day-to-day operations, logistics, and administration across all programs.",
  },
  {
    id: "op-3",
    name: "Jimran Mohammad Saiak",
    role: "Head of Grants, Communication & Partnership",
    image: "https://i.ibb.co/q3M4rdM2/Jimran.png",
    bio: "Drives fundraising, partnerships, and communications to sustain and expand MAGIC's work.",
  },
  {
    id: "op-4",
    name: "Umme Salma Labonno",
    role: "Head of Research & Development",
    image: "https://i.ibb.co/DHNzJC5s/Labonno.png",
    bio: "Leads research and innovation integrating education, sustainability, and community development.",
  },
  {
    id: "op-5",
    name: "Mizanur Rahman",
    role: "Head of Public Health",
    image: "https://i.ibb.co/Q78dBTBn/Mizan.png",
    bio: "Directs public health programs and community wellbeing initiatives.",
  },
  {
    id: "op-6",
    name: "Nadia Hossain Souraby",
    role: "Head of HR & Safeguarding Focal",
    image: "https://i.ibb.co/QFcwzwkF/Nadia.png",
    bio: "Oversees human resources and safeguarding, protecting the dignity and safety of all participants.",
  },
  {
    id: "op-7",
    name: "Kawsar Ahmed Kayes",
    role: "Head of Monitoring & Evaluation",
    image: "https://i.ibb.co/wfwFK77/Kayes.png",
    bio: "Leads impact assessment and data-driven improvement across MAGIC's initiatives.",
  },
  {
    id: "op-8",
    name: "Fahim Tajnowhat",
    role: "Head of Finance & Project Development",
    image: "https://i.ibb.co/5hJLL9xL/Fahim.png",
    bio: "Manages finance, budgeting, and project development with transparency and accountability.",
  },
  {
    id: "op-9",
    name: "Asif Ahmad Udoy",
    role: "Head of Media & Documentation",
    image: "https://i.ibb.co/DDHBcfMP/Udoy.png",
    bio: "Leads media, storytelling, and documentation to amplify MAGIC's impact.",
  },
  {
    id: "op-10",
    name: "Sayeed Anwar",
    role: "Head of IT & Development",
    image: "https://i.ibb.co/4ZjyRKdr/Sayeed.png",
    bio: "Oversees digital infrastructure, web presence, and technology development.",
  },
  {
    id: "op-11",
    name: "Abid Mohammad Mahdi",
    role: "Head of Education",
    image: "https://i.ibb.co/609m419t/Abid.png",
    bio: "Coordinates education programs focused on youth empowerment and learning.",
  },
  {
    id: "op-12",
    name: "Abdur Rahman",
    role: "Head of Technical Program",
    image: "/abdur_rahman.jpg",
    bio: "Leads technical programs and their hands-on implementation in the field.",
  },
  {
    id: "op-13",
    name: "Mohammad Younus",
    role: "Communication Assistant",
    image: "/younus.png",
    bio: "Supports communication efforts and community engagement activities.",
  },
];

const teamGroups = {
  board: { label: "Board of Trustees", members: boardOfTrustees },
  operation: { label: "Operation Team", members: operationTeam },
};

function TeamPage() {
  const [activeTab, setActiveTab] = useState("board");
  const activeGroup = teamGroups[activeTab];

  return (
    <div className="bg-[#f8f5f3] text-[#4a0e0e] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-100 via-[#f8f5f3] to-stone-50 py-20 sm:py-28 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(123,30,30,0.1)_50%,transparent_75%)] bg-[length:40px_40px] animate-[slide_25s_linear_infinite]"></div>
        </div>

        {/* Heading */}
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
              The People Behind MAGIC
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Meet Our <span className="text-[#7b1e1e]">Dedicated Team</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            >
              Driven by passion, purpose, and the vision to empower communities
              through education, innovation, and sustainability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-20 bg-[#f8f5f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-10 sm:mb-14">
            <div className="inline-flex p-1.5 bg-white rounded-full shadow-sm border border-[#7b1e1e]/15">
              {Object.entries(teamGroups).map(([key, group]) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className="relative px-5 sm:px-8 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300 focus:outline-none"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeTeamTab"
                        className="absolute inset-0 bg-[#7b1e1e] rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span
                      className={`relative z-10 ${
                        isActive
                          ? "text-white"
                          : "text-[#7b1e1e]/70 hover:text-[#7b1e1e]"
                      }`}
                    >
                      {group.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Carousel — key forces a clean remount (resets to first member) on tab change */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TeamCarousel
              members={activeGroup.members}
              title={activeGroup.label}
              titleSize="2xl"
              onMemberChange={(member, index) => {
                console.log("Active member:", member.name);
              }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default TeamPage;