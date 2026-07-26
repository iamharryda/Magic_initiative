import { Routes, Route, Link } from "react-router-dom";
import Header2 from "./pages/Navigation/Navigation.jsx";
import HomePage from "./pages/Home/Home.jsx";
import TeamPage from "./pages/About/Team.jsx";
import MissionVisionPage from "./pages/About/mission.jsx";
import CoreValuesPage from "./pages/About/CoreValues.jsx";
import ImpactPage from "./pages/Impact/Impact.jsx";
import ComingSoonPage from "./pages/UnderDevelopement/UnderDevelopement.jsx";
import Footer from "./pages/Footer/Footer.jsx";
import { useState } from "react";
import Preloader from "./components/preloader/Preloader.jsx";
import MagicBoardSchool from "./pages/Programs/MagicSchool.jsx";
import ClimateActionPage from "./pages/Programs/ClimateAction.jsx";
import HealthWellbeingPage from "./pages/Programs/HealthWell.jsx";
import ResearchInnovationPage from "./pages/Programs/ReseachInnovation.jsx";
import VocationalTrainingPage from "./pages/Programs/VocationalTraining.jsx";
import WomenEmpowermentPage from "./pages/Programs/WomenEmpowerment.jsx";
import ContactPage from "./pages/Contact/Contact.jsx";
import FAQPage from "./pages/faq/FaqPage.jsx";
import VolunteerPage from "./pages/get_involved/Volunteerpage.jsx";
import PartnerPage from "./pages/get_involved/Partnerpage.jsx";
import PeaceJusticePage from "./pages/Programs/PeaceJusticePage.jsx";
import EmergencyResponsePage from "./pages/Programs/EmergencyResponsePage.jsx";
import DonatePage from "./pages/donation/DonatePage.jsx";
import SponsorChildPage from "./pages/donation/SponsorChildPage.jsx";



export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <div className="font-sans">
      {/* Navbar */}
      <Header2 />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/team" element={<TeamPage></TeamPage>} />
        <Route path="/mission" element={<MissionVisionPage></MissionVisionPage>} />
        <Route path="/values" element={<CoreValuesPage></CoreValuesPage>} />
        <Route path="/impact" element={<ImpactPage></ImpactPage>} />
        <Route path="/focus/education" element={<MagicBoardSchool></MagicBoardSchool>} />
        <Route path="/focus/climate" element={<ClimateActionPage/>} />
        <Route path="/focus/health" element={<HealthWellbeingPage></HealthWellbeingPage>} />
        <Route path="/focus/research" element={<ResearchInnovationPage></ResearchInnovationPage>} />
        <Route path="/focus/youth" element={<VocationalTrainingPage></VocationalTrainingPage>} />
        <Route path="/focus/women" element={<WomenEmpowermentPage></WomenEmpowermentPage>} />
        <Route path="/contact" element={<ContactPage></ContactPage>} />
        <Route path="/faq" element={<FAQPage></FAQPage>} />
        <Route path="/volunteer" element={<VolunteerPage/>} />
        <Route path="/partner" element={<PartnerPage/>} />
        <Route path="/focus/peace" element={<PeaceJusticePage></PeaceJusticePage>} />
        <Route path="/focus/emergency" element={<EmergencyResponsePage></EmergencyResponsePage>} />
        <Route path="/donate" element={<DonatePage></DonatePage>} />
        <Route path="/sponsor" element={<SponsorChildPage></SponsorChildPage>} />

      </Routes>
      {/* Footer */}
      <Footer></Footer>
    </div>
      )
    }
    </>
  );
}
