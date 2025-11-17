import react from "react";
import React, {useState} from "react";
const list=[{nom:"banane",type:"fruit"},{nom:"orange",type:"fruit"},{nom:"pomme",type:"fruit"},{nom:"raisins",type:"fruit"},{nom:"kiwi",type:"fruit"},{nom:"tomate",type:"legume"},{nom:"carotte",type:"legume"},{nom:"pomme de terre",type:"legume"},{nom:"navet",type:"legume"},{nom:"poivron",type:"legume"}]
function Rinput(){
    return(
        <div>
            
      <select 
        value={searchType} 
        onChange={(e) =>setType(e.target.value)}
        style={{ marginBottom: "20px", padding: "5px" }}
      >
        {types.map((t, index) => (
          <option key={index} value={t}>{t}</option>
        ))}
      </select>
      
      <button type="submit" style={{ marginRight: "10px" }}>Filtere</button>
      </div>
    )
}
export default Rinput;