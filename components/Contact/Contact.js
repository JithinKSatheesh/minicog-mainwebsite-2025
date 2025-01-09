import React from "react";
// import Link from "next/link";

// import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="main-content">
        <div className="rainbow-contact-area rainbow-section-gapTop-big">
          <div className="container">
            <div className="row _mt--40 row--15 mb--80">
              
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

                <div 
                  data-bs-toggle="modal" data-bs-target="#modalChatbot"
                  className="rainbow-address">
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
                <div 
                data-bs-toggle="modal" data-bs-target="#modalGetResource"
                className="rainbow-address">
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
        
                <div 
                  data-bs-toggle="modal" data-bs-target="#modalCorporateTraining"
                  className="rainbow-address">
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
