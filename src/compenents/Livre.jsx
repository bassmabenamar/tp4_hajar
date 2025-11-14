import React from "react";
import LivreImg from "./LivreImg";
import LivreTitle from "./LivreTitle";
import LivrePrice from "./LivrePrice";

function Livre({ img, title, price }) {
  
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      width: "200px",
      borderRadius: "10px"
    }}>
      <LivreImg src={img} />
      <LivreTitle title={title} />
      <LivrePrice price={price} />
    </div>
  );
}

export default Livre;
