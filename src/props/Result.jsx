import react from "react";
const list=[{nom:"banane",type:"fruit"},{nom:"orange",type:"fruit"},{nom:"pomme",type:"fruit"},{nom:"raisins",type:"fruit"},{nom:"kiwi",type:"fruit"},{nom:"tomate",type:"legume"},{nom:"carotte",type:"legume"},{nom:"pomme de terre",type:"legume"},{nom:"navet",type:"legume"},{nom:"poivron",type:"legume"}]
function Result(){
    return(
        <ul>{list.map((l,index)=>(
            <li key={index}>{l.nom}-{l.type}</li>))}
        </ul>
    )
    
}
export default Result;