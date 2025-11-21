import React from "react";

function Aide(){
  return (
    <aside style={styles.box}>
      <h3 style={styles.title}>Aide rapide</h3>
      <p style={styles.text}> Cliquer sur « Créer une nouvelle recette » pour ouvrir le formulaire </p>
      <p style={styles.text}>• Pagination numérotée en bas de la liste.</p>
    </aside>
  );
}


const styles ={
  box:{ border:"1px solid #dddddd", borderRadius: "8px", padding:"12px", backgroundColor: "#ffffff" },
  title:{ fontSize:"16px", marginBottom: "6px" },
  text:{ fontSize:"14px", marginBottom: "4px" },
};


export default Aide;