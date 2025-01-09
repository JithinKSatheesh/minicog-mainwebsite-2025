import React from "react";
import Link from "next/link";

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="main-content">
        <div className="rainbow-contact-area rainbow-section-gapTop-big">
          <div className="container">
            <div className="row _mt--40 row--15 mb--80">
              {/* <div className="col-lg-8">
                <div className="contact-details-box">
                  <h3 className="title">Get Started with a free quotation</h3>

                  <div className="profile-details-tab">
                    <div className="advance-tab-button">
                      <ul
                        className="nav nav-tabs tab-button-style-2 justify-content-start"
                        id="settinsTab-4"
                        role="tablist"
                      >
                        <li role="presentation">
                          <a
                            href="#"
                            className="tab-button active"
                            id="image-genarator-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#image-genarator"
                            role="tab"
                            aria-controls="image-genarator"
                            aria-selected="true"
                          >
                            <span className="title">AI Image</span>
                            <span className="title">Generator</span>
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#"
                            className="tab-button"
                            id="photo-editor-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#photo-editor"
                            role="tab"
                            aria-controls="photo-editor"
                            aria-selected="true"
                          >
                            <span className="title">AI Photo</span>
                            <span className="title">Generator</span>
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#"
                            className="tab-button"
                            id="email-genarator-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#email-genarator"
                            role="tab"
                            aria-controls="email-genarator"
                            aria-selected="true"
                          >
                            <span className="title">AI Email</span>
                            <span className="title">Generator</span>
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            href="#"
                            className="tab-button"
                            id="code-genarator-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#code-genarator"
                            role="tab"
                            aria-controls="code-genarator"
                            aria-selected="true"
                          >
                            <span className="title">AI Code</span>
                            <span className="title">Generator</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        id="image-genarator"
                        role="tabpanel"
                        aria-labelledby="image-genarator-tab"
                      >
                        <ContactForm />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="photo-editor"
                        role="tabpanel"
                        aria-labelledby="photo-editor-tab"
                      >
                        <ContactForm />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="email-genarator"
                        role="tabpanel"
                        aria-labelledby="email-genarator-tab"
                      >
                        <ContactForm />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="code-genarator"
                        role="tabpanel"
                        aria-labelledby="code-genarator-tab"
                      >
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-6 mt_md--30 mt_sm--30">

                <div 
                   data-bs-toggle="modal" data-bs-target="#modalConsultingTypeForm"
                  className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Consulting</h4>
                    <p className="b2">
                      click to fill the form
                    </p>
                  </div>
                </div>

                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-envelope"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Contact</h4>
                    <p className="b2">
                      click to fill the form
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt_md--30 mt_sm--30">
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Access our assets</h4>
                    <p className="b2">
                      click to fill the form
                    </p>
                  </div>
                </div>
        
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-envelope"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Corporate Training</h4>
                    <p className="b2">
                      click to fill the form
                    </p>
                    {/* <p className="b2">
                      <Link href="mailto:example@gmail.com">
                        example@gmail.com
                      </Link>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
