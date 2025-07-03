import React from "react";
import Header from "./components/Navbar";
import Herosection from './components/Herosection';
import Theme from "./components/theme";
import FocusAreas from "./components/FocusAreas";
import SpeakersArea from "./components/SpeakersArea";
import SummitTickets  from "./components/summitTickets";
import PartnersSection  from "./components/PartnerSection";
import MediaAndFooter  from "./components/mediafooter";


function App() {
  return (
    <>
      <Header />
      <Herosection />
      <Theme/>
      <FocusAreas/>
      <SpeakersArea />
      <SummitTickets />
      <PartnersSection />
      <MediaAndFooter />
    </>
  );
}

export default App;
