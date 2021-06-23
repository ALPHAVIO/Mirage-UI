import React from "react";
import "./modal.css";

export const Modal = ({ show, close, header, heading, body, button }) => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <p> {header} </p>
        <span onClick={close} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>{heading}</h4>
          <p>{body}</p>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};
