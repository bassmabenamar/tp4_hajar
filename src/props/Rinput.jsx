import react from "react";
import React, {useState} from "react";
const list=[{nom:"banane",type:"fruit"},{nom:"orange",type:"fruit"},{nom:"pomme",type:"fruit"},{nom:"raisins",type:"fruit"},{nom:"kiwi",type:"fruit"},{nom:"tomate",type:"legume"},{nom:"carotte",type:"legume"},{nom:"pomme de terre",type:"legume"},{nom:"navet",type:"legume"},{nom:"poivron",type:"legume"}]
function Rinput({search,setSearch}){
    const envoyer=(e)=>{
        e.preventdefault();
        
    }

      return(
        <div>
        <input type="text" placeholder="rechercher par type" value={search} onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <button type="submit" style={{ marginRight: "10px" }}>Ajouter</button>
      </div>
    )
}
export default Rinput;