import React from "react";
import { Modal } from "bootstrap";

export default function Image({ id, url, title }) {
  const onClick = () => {
    console.log("click hua");
    var modal = new Modal(document.getElementById(id));
    console.log(modal);

    modal.show();
  };
  return (
    <>
      <div onClick={onClick} className="col col-6 col-lg-4 text-center mt-3">
        <img className="img-thumbnail" alt={title} src={url}></img>
        <p className="fw-bold">{title}</p>
      </div>
      <div
        class="modal fade"
        id={id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-center">
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
