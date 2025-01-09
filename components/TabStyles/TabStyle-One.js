import Link from "next/link";
import Image from "next/image";
import React from "react";

import { TabData } from "../../data/tabStyle.jsx";
import { useAppContext } from "@/context/Context";

const TabStyleOne = ({ selectedTab, setSelectedTab }) => {
  const { isLightTheme } = useAppContext();

  return (
    <>
      <div className="row row--30 align-items-center">
        <div className="col-lg-12">
          <div className="rainbow-default-tab style-three generator-tab-defalt ">
            <ul className="nav nav-tabs tab-button " role="tablist">
              {TabData &&
                TabData.TabStyleOne.map((data, index) => (
                  <li className="nav-item tabs__tab" role="presentation" key={index}>
                    <button
                      className={`min-w-500-desktop nav-link rainbow-gradient-btn without-shape-circle ${
                        selectedTab === data.target ? "active" : ""
                      }`}
                      id={`${data.menuId}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${data.target}`}
                      type="button"
                      role="tab"
                      aria-controls={data.target}
                      aria-selected={selectedTab === data.target}
                      onClick={() => setSelectedTab(data.target)}
                    >
                      <span className="generator-icon">
                        <Image
                          src={data.iconImg}
                          width={24}
                          height={24}
                          alt="Vedio Generator Icon"
                        />
                        {data.text}
                      </span>
                      {/* <span className="border-bottom-style"></span> */}
                    </button>
                  </li>
                ))}
            </ul>
            <div className="rainbow-tab-content tab-content">
              {TabData &&
                TabData.TabStyleOne.map((tab, index) => (
                  <div
                    className={`tab-pane fade ${
                      selectedTab === tab.target ? "show active" : ""
                    }`}
                    id={tab.target}
                    role="tabpanel"
                    aria-labelledby={`${tab.menuId}-tab`}
                    key={index}
                  >
                    <div className="inner">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="section-title">
                            <h2 className="title">{tab.title}</h2>
                            <div className="features-section">
                              <ul className="list-style--1">
                                {tab.subItem.map((item, i) => (
                                  <li key={i}>
                                    <i className="fa-regular fa-circle-check"></i>
                                    {item.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="read-more">
                              <Link
                                className="btn-default color-blacked"
                                href="/services#"
                              >
                                Start Exploring Now
                                <i className="fa-sharp fa-solid fa-arrow-right ps-2"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 mt_md--30 mt_sm--30">
                          <div className="export-img">
                            <div className="inner-without-padding">
                              <div className="export-img img-bg-shape">
                                <Image
                                  src={isLightTheme ? tab.img : tab.imgLight}
                                  width={569}
                                  height={483}
                                  alt="Chat example Image"
                                />
                                <div className="image-shape"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabStyleOne;
