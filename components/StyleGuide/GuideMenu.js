import React from "react";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const GuideMenu = () => {
  const [currentSection, setCurrentSection] = useState("colorpalette");

  const sections = [
    { id: "Software", label: "Software Consulting" },
    { id: "Consulting", label: "AI Consulting & Development Services" },
    { id: "Corporate", label: "Corporate Taining & Bootcamp" },
    { id: "Search", label: "Intelligent Enterprise Search Engine." },
    { id: "NoCode", label: "NoCode ML & BI Tool for Managers" },
    { id: "CRM", label: "CRM & ERP Software" },
    { id: "robotic", label: "Robotic Process Automation" },
    // { id: "pagination", label: "Pagination" },
    // { id: "avatars", label: "Avatars" },
    // { id: "animatedHeading", label: "Animated Heading" },
  ];

  useEffect(() => {
    const sectionIds = [
      "Software",
      "Consulting",
      "Corporate",
      "Search",
      "NoCode",
      "CRM",
      "robotic",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);

        if (element && scrollPosition >= element.offsetTop) {
          setCurrentSection(sectionId);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);
  return (
    <>
      <div className="inner">
        <div className="content-item-content">
          <div className="rbt-widget-details">
            <nav className="onepagenav">
              <ul className="mainmenu rbt-course-details-list-wrapper">
                {sections.map((sec, i) => (
                  <li
                    className={currentSection === sec.id ? "current" : ""}
                    key={i}
                  >
                    <ScrollLink
                      to={sec.id}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{ cursor: "pointer" }}
                    >
                      {i + 1}. {sec.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideMenu;
