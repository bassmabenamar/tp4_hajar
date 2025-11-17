import react from "react";
import React, {useState} from "react";
import Result from "./Result";
import Rinput from "./Rinput";
import Rselect from "./Rselect";

function Recherche(){
        const[searchType,setType]=useState("All");
        const[search,setSearch]=useState("");
        const[listFiltrer,setListFiltrer]=useState("");
        const[listItems,setListItem]=useState(list);
          const types=[...new Set(list.map(l => l.type))];
    let searchList=searchType==="All" 
        ? list
        : list.filter(l =>  l.type=== searchType);
          if (search.trim() !== "") {
        searchList = searchList.filter(l=>
          l.type.toLowerCase().includes(search.toLowerCase())
        )};
        
        const onSearch=()=>{
            let searchList=searchType==="All" 
        ? list
        : list.filter(l =>  l.type=== searchType);
          if (search.trim() !== "") {
        searchList = listItems.filter(l=>
          l.type.toLowerCase().includes(search.toLowerCase())
        )}; 
        setListFiltrer(searchList)
    }
    return(
        <div>
        <Rinput
        search={search}
        setSearch={setSearch}
        />
        <Rselect
        searchType={searchType}
        setType={setType}/>
        <Result data={listFiltrer.length>0?listFiltrer :listItems}/>
        </div>
    )
}
export default Recherche;