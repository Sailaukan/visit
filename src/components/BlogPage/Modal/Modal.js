import React, { useEffect, useState, useRef } from "react";
import classes from "./Modal.module.css";

function Modal({ title, content, closeModal }) {
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setShow(true), 0);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(closeModal, 300);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  return (
    <div
      className={`${classes.modal} ${show ? classes.show : ""}`}
      onClick={handleOutsideClick}
    >
      <div
        className={`${classes.modalContent} ${show ? classes.show : ""}`}
        ref={modalRef}
      >
        <span className={classes.close} onClick={handleClose}>
          &times;
        </span>

        <div className={classes.title_modal}>{title}</div>
        <div className={classes.content_modal}>
          {content.split("\n").map((line, index) => {
            const parts = line.split(/(\/b.*?\/b)/g);
            return (
              <div key={index}>
                {parts.map((part, idx) => {
                  if (part.startsWith("/b") && part.endsWith("/b")) {
                    const boldText = part.slice(2, -2);
                    return <strong key={idx}>{boldText}</strong>;
                  } else {
                    return <span key={idx}>{part}</span>;
                  }
                })}
                <br />
              </div>
            );
          })}
        </div>
        {/* <center className={classes.reactions}>
          a
        </center> */}
      </div>
    </div>
  );
}

export default Modal;
