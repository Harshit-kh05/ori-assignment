import React from "react";

export default function Image({ url, title }) {
  return (
    <div className="col col-6 col-lg-4 text-center mt-3">
      <img className="img-thumbnail " src={url}></img>
      <p className="fw-bold">{title}</p>
    </div>
  );
}
