import React from "react";
import GuideMenu from "./GuideMenu";
import SoftwareConsulting from "./ServiceSections/SoftwareConsulting.js"
import AiConsulting from "./ServiceSections/AiConsulting.js"
import CorporatTraining from "./ServiceSections/CorporatTraining.js"
import IntelligentEnterpriseSearch from "./ServiceSections/IntelligentEnterpriseSearch.js"
import NoCodeMLBI from "./ServiceSections/NoCodeMLBI.js"
import CRM from "./ServiceSections/CRM.js"
// import ColorPalette from "./StyleSections/ColorPalette";
// import Gradient from "./StyleSections/Gradient";
// import Typography from "./StyleSections/Typography";
// import FormElements from "./StyleSections/FormElements";
// import Pagination from "./StyleSections/Pagination";
// import Avatars from "./StyleSections/Avatars";
// import AnimatedHeading from "./StyleSections/AnimatedHeading";

const StyleGuide = () => {
  return (
    <>
      <div className="pt--30"></div>
      <div className="rbt-style-guide-area rbt-utilize-area rainbow-section-gap-big">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3">
              <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                <GuideMenu />
              </div>
            </div>
            <div className="col-lg-9">
              <div
                id="Software"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
                <SoftwareConsulting />
              </div>
              <div
                id="Consulting"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
                <AiConsulting />
              </div>
              <div
                id="Corporate"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
                <CorporatTraining />
              </div>
              <div
                id="Search"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
                <IntelligentEnterpriseSearch />
              </div>
              <div
                id="NoCode"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
                <NoCodeMLBI />
              </div>
              <div
                id="CRM"
                className="rbt-elements-area rbt-shadow-box mb--60"
              >
                <CRM />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleGuide;
