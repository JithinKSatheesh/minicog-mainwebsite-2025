import { useEffect, useState } from "react";

export default function ContactFormiFrame() {
  const [iframeSrc, setIframeSrc] = useState('https://maker840823.typeform.com/to/OAMm8N');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Import Bootstrap dynamically
    import("bootstrap").then(({ Modal }) => {
      const modalElement = document.getElementById("modalGetResource");
      // const myModal = new Modal(modalElement);

      // Show iframe source and start loading when modal opens
      modalElement.addEventListener("show.bs.modal", () => {
        setIsLoading(true);
        setIframeSrc("https://maker840823.typeform.com/to/OAMm8N");
      });

      // Clear iframe source and stop loading when modal closes
      modalElement.addEventListener("hide.bs.modal", () => {
        setIsLoading(false);
        setIframeSrc("");
      });
    });
  }, []);

  return (
    <>
      <div
        className="modal fade"
        id="modalGetResource"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Popup Title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div style={{ height: "80vh", position: "relative" }} className="modal-body">
              {(!iframeSrc) && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    zIndex: 10,
                  }}
                >
                  <p>Loading...please wait.</p>
                </div>
              )}

              {iframeSrc && (
                <iframe
                  id="typeform-full"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src={iframeSrc}
                  onLoad={() => setIsLoading(false)}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
