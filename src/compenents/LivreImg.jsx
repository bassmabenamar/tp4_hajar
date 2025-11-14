import React from "react";

function LivreImg({ src }) {
  return (
    <img 
      src={src} 
      alt="Livre" 
      style={{ width: "120px" }} 
    />
  );
}

export default LivreImg;
