import React from "react";
import { Modal } from "bootstrap";

export default function Image({ id, url, title }) {
  const onClick = () => {
    var modal = new Modal(document.getElementById(id));

    modal.show();
  };
  return (
    <>
      <div
        onClick={onClick}
        className="img-container col col-6 col-lg-4 text-center mt-3"
      >
        <img className="img-thumbnail card-img" alt={title} src={url}></img>
        <p className="fw-bold">{title}</p>
      </div>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img
                className="img-thumbnail modal-img"
                alt={title}
                src={url}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
