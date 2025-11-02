import TeamCarousel from "../../components/lightswind/team-carousel";
import { motion } from "framer-motion";


const teamMembers = [
  {
    id: "1",
    name: "Jimran Mohammad Saiak",
    role: "CEO / Executive Director",
    image: "https://i.ibb.co/q3M4rdM2/Jimran.png",
    bio: "Founder and Executive Director of MAGIC Initiative, leading education and climate resilience programs in Bangladesh."
  },
  {
    id: "2",
    name: "Mizanur Rahman",
    role: "Human Resource Manager",
    image: "https://i.ibb.co/Q78dBTBn/Mizan.png",
    bio: "Oversees human resources and staff development, ensuring an inclusive and empowering work culture."
  },
  {
    id: "3",
    name: "Abid Mohammad Mahdi",
    role: "Program Coordinator",
    image: "https://i.ibb.co/609m419t/Abid.png",
    bio: "Coordinates community and education programs focused on youth empowerment and sustainable development."
  },
  {
    id: "4",
    name: "Abul Hasnat Rabbi",
    role: "Operations Coordinator",
    image: "https://i.ibb.co/DHq6GYLL/Rabbi.png",
    bio: "Manages day-to-day operations and logistics, ensuring smooth implementation of MAGIC’s initiatives."
  },
  {
    id: "5",
    name: "Kawser Ahmed Kayes",
    role: "Monitoring & Evaluation Officer",
    image: "https://i.ibb.co/wfwFK77/Kayes.png",
    bio: "Responsible for program impact assessment and continuous improvement through data-driven insights."
  },
  {
    id: "6",
    name: "Jannatul Maowa Niha",
    role: "Marketing Officer",
    image: "https://i.ibb.co/MkXJFBXX/Niha.png",
    bio: "Leads marketing campaigns and storytelling to amplify the voices and achievements of the MAGIC community."
  },
  {
    id: "7",
    name: "Sayeed Anwar",
    role: "Technical Officer",
    image: "https://i.ibb.co/4ZjyRKdr/Sayeed.png",
    bio: "Oversees digital infrastructure, ensuring smooth technological operations and web presence for the organization."
  },
  {
    id: "8",
    name: "Umme Salma Labonno",
    role: "Research & Innovation Officer",
    image: "https://i.ibb.co/DHNzJC5s/Labonno.png",
    bio: "Drives innovation and research projects integrating education, sustainability, and community development."
  },
  {
    id: "9",
    name: "Asif Ahmad Udoy",
    role: "Communications Officer",
    image: "https://i.ibb.co/DDHBcfMP/Udoy.png",
    bio: "Handles public relations and communication strategies to enhance awareness and stakeholder engagement."
  },
  {
    id: "10",
    name: "Nadia Hossain Souraby",
    role: "Safeguarding Executive",
    image: "https://i.ibb.co/QFcwzwkF/Nadia.png",
    bio: "Ensures the safety, dignity, and protection of all participants through robust safeguarding policies and practices."
  },
  {
    id: "11",
    name: "Fahim Tajnwhat",
    role: "Finance & Admin Manager",
    image: "https://i.ibb.co/5hJLL9xL/Fahim.png",
    bio: "Manages financial operations, budgeting, and administration with transparency and accountability."
  },
];

function TeamPage() {
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
              Meet Our{" "}
              <span className="text-[#7b1e1e]">Dedicated Team</span>
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

      {/* Team Carousel Section */}
      <section className="py-12 sm:py-20 bg-[#f8f5f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeamCarousel
            members={teamMembers}
            title="Meet Our Team"
            titleSize="2xl"
            onMemberChange={(member, index) => {
              console.log("Active member:", member.name);
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default TeamPage;
