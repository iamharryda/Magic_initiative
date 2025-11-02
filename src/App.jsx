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
        <Route path="/volunteer" element={<ComingSoonPage></ComingSoonPage>} />
        <Route path="/partner" element={<ComingSoonPage></ComingSoonPage>} />
        <Route path="/magic" element={<MagicBoardSchool></MagicBoardSchool>} />
        <Route path="/climate" element={<ClimateActionPage/>} />
        <Route path="/health" element={<HealthWellbeingPage></HealthWellbeingPage>} />
        <Route path="/research" element={<ResearchInnovationPage></ResearchInnovationPage>} />
        <Route path="/vocational" element={<VocationalTrainingPage></VocationalTrainingPage>} />
        <Route path="/women" element={<WomenEmpowermentPage></WomenEmpowermentPage>} />
        <Route path="/contact" element={<ContactPage></ContactPage>} />

      </Routes>
      {/* Footer */}
      <Footer></Footer>
    </div>
      )
    }
    </>
  );
}
