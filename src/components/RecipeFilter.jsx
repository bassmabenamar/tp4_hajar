import React from "react";

function RecipeFilter(props){
  const {searchText,categoryFilter, onSearchChange, onCategoryChange } = props;

  function changeSearchInput(e){
    onSearchChange(e.target.value);
  }
  function changeCategorySelect(e){
    onCategoryChange(e.target.value);
  }

  return (
    <div style={styles.row}>
      <input type="text"  placeholder="Rechercher..."  value={searchText} onChange={changeSearchInput} style={styles.searchInput} />

      <select value={categoryFilter}    onChange={changeCategorySelect}  style={styles.select} >
        <option value="Toutes">Toutes catégories</option>
        <option value="Entrée">Entrée</option>
        <option value="Plat">Plat</option>
        <option value="Dessert">Dessert</option>
        <option value="Boisson">Boisson</option>
      </select>
    </div>
  );
}

const styles ={
  row:{display:"flex", gap:"10px", alignItems: "center", marginTop:"8px"},
  searchInput:{flex:1, padding: "6px", fontSize: "14px"},
  select:{padding: "6px",fontSize: "14px" },
};

export default RecipeFilter;
