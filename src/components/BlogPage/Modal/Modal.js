import React, { useEffect, useState } from "react";
import classes from "./Modal.module.css";

function Modal({ title, content, closeModal }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 0);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(closeModal, 300);
  };

  return (
    <div className={`${classes.modal} ${show ? classes.show : ""}`}>
      <div className={`${classes.modalContent} ${show ? classes.show : ""}`}>
        <span className={classes.close} onClick={handleClose}>
          &times;
        </span>

        <div className={classes.title_modal}>{title}</div>
        <div className={classes.content_modal}>
          {
            content.split('\n').map((line, index) => {
              const parts = line.split(/(\/b.*?\/b)/g);
              return (
                <div key={index}>
                  {parts.map((part, idx) => {
                    if (part.startsWith('/b') && part.endsWith('/b')) {
                      const boldText = part.slice(2, -2);
                      return <strong key={idx}>{boldText}</strong>;
                    }
                    else {
                      return <span key={idx}>{part}</span>;
                    } 
                  })}
                  <br />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Modal;
