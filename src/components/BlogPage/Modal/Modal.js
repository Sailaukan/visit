import React, { useEffect, useState, useRef } from "react";
import classes from "./Modal.module.css";

function Modal({ title, content, closeModal }) {
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setShow(true), 0);
    
    // Add escape key listener
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    
    document.addEventListener("keydown", handleEscKey);
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
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

  // Process content to handle bold text and links
  const processContent = (content) => {
    if (!content) return [];
    
    return content.split("\n").map((line, index) => {
      // Handle bold text with /b tags
      const boldParts = line.split(/(\/b.*?\/b)/g);
      
      // Handle links with [text](url) format
      const processedParts = boldParts.map((part, idx) => {
        if (part.startsWith("/b") && part.endsWith("/b")) {
          const boldText = part.slice(2, -2);
          return <strong key={`bold-${idx}`}>{boldText}</strong>;
        } else {
          // Process links in regular text
          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
          let lastIndex = 0;
          const elements = [];
          let match;
          
          while ((match = linkRegex.exec(part)) !== null) {
            // Add text before the link
            if (match.index > lastIndex) {
              elements.push(
                <span key={`text-${lastIndex}`}>
                  {part.substring(lastIndex, match.index)}
                </span>
              );
            }
            
            // Add the link
            elements.push(
              <a 
                key={`link-${match.index}`} 
                href={match[2]} 
                target="_blank" 
                rel="noopener noreferrer"
                className={classes.contentLink}
              >
                {match[1]}
              </a>
            );
            
            lastIndex = match.index + match[0].length;
          }
          
          // Add remaining text
          if (lastIndex < part.length) {
            elements.push(
              <span key={`text-end-${idx}`}>
                {part.substring(lastIndex)}
              </span>
            );
          }
          
          return elements.length > 0 ? elements : part;
        }
      });
      
      return (
        <div key={index} className={classes.contentLine}>
          {processedParts}
        </div>
      );
    });
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
        <button className={classes.close} onClick={handleClose}>
          &times;
        </button>

        <h2 className={classes.title_modal}>{title}</h2>
        <div className={classes.content_modal}>
          {processContent(content)}
        </div>
      </div>
    </div>
  );
}

export default Modal;
