import React, { useRef, useState } from "react";

const ContactForm = () => {
  const formRef = useRef(null);
  const [resultMessage, setResultMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const sendMessage = async (event) => {
    event.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);
    const jsonObject = Object.fromEntries(formData.entries());

    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(jsonObject),
      });

      const json = await response.json();

      if (response.status === 200) {
        setResultMessage(json.message);
        setShowModal(true); // Show the success modal
      } else {
        setResultMessage(json.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResultMessage("Something went wrong!");
    }
    setLoading(false);
    form.reset();
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={sendMessage}
        className="rbt-profile-row rbt-default-form row row--15"
      >
        <input
          type="hidden"
          name="access_key"
          value="9f6a724d-50ee-4fc9-8712-c2ed3537de21"
        />
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="fullname1">Full Name</label>
            <input
              id="fullname1"
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="Company">Company</label>
            <input
              id="Company"
              type="text"
              name="company"
              placeholder="Company"
              required
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="phonenumber1">Phone Number</label>
            <input
              id="phonenumber1"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="bio1">Message</label>
            <textarea
              id="bio1"
              cols="20"
              rows="5"
              name="message"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
        </div>
        <div className="col-12 mt--20">
          <div className="form-group mb--0">
            <button type="submit" className="btn-default">
              {loading ? "Sending..." : "Message"}
            </button>
          </div>
        </div>
      </form>

      {resultMessage && (
        <div className="result-message pt--30 text-center">
          <p>{resultMessage}</p>
        </div>
      )}

      {/* Bootstrap Modal */}
      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        tabIndex="-1"
        style={{ display: showModal ? "block" : "none" }}
        aria-labelledby="successModalLabel"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-black" id="successModalLabel">
                Success!
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body text-black">
              Your message has been sent successfully.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for the modal */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default ContactForm;
