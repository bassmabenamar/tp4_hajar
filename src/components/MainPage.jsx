import React,{ useState } from "react";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";
import RecipeFilter from "./RecipeFilter";
import Pagination from "./Pagination";
import Aide from "./Aide";

import imageTacos from "../assets/h1.jpg";
import imageSmoothie from "../assets/h2.jpg";

const initialRecipes=[
  {
    id:1,
    name:"Tacos méditerranéens",
    category:"Plat",
    ingredients:["Tortilla","Poulet","Tomate","Feta"],
    difficulty:3,
    description: "Tacos légers et parfumés",
    image:imageTacos,
    createdAt: new Date().toLocaleString(),
  },
  {
    id:2,
    name:"Smoothie mangue",
    category:"Boisson",
    ingredients:["Mangue", "Lait d'amande", "Miel"],
    difficulty:2,
    description:"Boisson fraiche et fruitee",
    image:imageSmoothie,
    createdAt: new Date().toLocaleString(),
  },
];
function MainPage(){
  const [recipes, setRecipes]= useState(initialRecipes);
  const [isFormOpen, setIsFormOpen]= useState(false);
  const [editingRecipe, setEditingRecipe]= useState(null);
  const [searchText, setSearchText]= useState("");
  const [categoryFilter, setCategoryFilter]= useState("Toutes");
  const [currentPage, setCurrentPage]= useState(1);

  const itemsPerPage = 4;
  function handleAddClick(){
    setEditingRecipe(null);
    setIsFormOpen(true);
  }
  function handleSaveRecipe(recipeData){
    if (editingRecipe){
      setRecipes((prev) =>
        prev.map((r) =>
          r.id === editingRecipe.id ? { ...editingRecipe, ...recipeData } : r
        )
      );
    } else{
      const newRecipe={
        id: Date.now(),
        ...recipeData,
        createdAt: new Date().toLocaleString(),
      };
      setRecipes((prev) => [newRecipe, ...prev]);
    }
    setIsFormOpen(false);
    setEditingRecipe(null);
  }

  function handleDeleteRecipe(id){
    setRecipes((prev) => prev.filter((r) => r.id !== id));
  }

  function handleEditRecipe(id){
    const recipe = recipes.find((r) => r.id === id);
    if (recipe) {
      setEditingRecipe(recipe);
      setIsFormOpen(true);
    }
  }

  function handleDuplicateRecipe(id){
    const recipe = recipes.find((r) => r.id === id);
    if (!recipe) return;
    const copy = {
      ...recipe,
      id: Date.now(),
      name: recipe.name + " (copie)",
      createdAt: new Date().toLocaleString(),
    };
    setRecipes((prev) => [copy, ...prev]);
  }
  
  
  
  const filteredRecipes = recipes.filter((r) => {
    const matchesName = r.name
      .toLowerCase()
      .includes(searchText.toLowerCase().trim());
    const matchesCategory =
      categoryFilter === "Toutes" || categoryFilter === r.category;
    return matchesName && matchesCategory;
  });



  const totalPages =
    filteredRecipes.length === 0
      ? 1
      : Math.ceil(filteredRecipes.length / itemsPerPage);
  const startIndex=(currentPage - 1) * itemsPerPage;
  const currentRecipes = filteredRecipes.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  function handlePageChange(page){
    setCurrentPage(page);
  }

  function handleChangeSearch(value){
    setSearchText(value);
    setCurrentPage(1);
  }
  function handleChangeCategory(value){
    setCategoryFilter(value);
    setCurrentPage(1);
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Creative Recipe Builder</h1>
        <button style={styles.addButton} onClick={handleAddClick}>
          Créer une nouvelle recette
        </button>
      </header>


      <RecipeFilter
        searchText={searchText}
        categoryFilter={categoryFilter}
        onSearchChange={handleChangeSearch}
        onCategoryChange={handleChangeCategory}
      />
      <div style={styles.mainRow}>
        <div style={styles.listColumn}>
          <RecipeList
            recipes={currentRecipes}
            onEdit={handleEditRecipe}
            onDuplicate={handleDuplicateRecipe}
            onDelete={handleDeleteRecipe}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        <div style={styles.aideColumn}>
          <Aide />
        </div>
      </div>

      {isFormOpen && (
        <RecipeForm
          mode={editingRecipe ? "edition" : "creation"}
          initialRecipe={editingRecipe}
          onSave={handleSaveRecipe}
          onCancel={() => {
            setIsFormOpen(false);
            setEditingRecipe(null);
          }}
        />
      )}
    </div>
  );
}

const styles={
  container:{
    maxWidth:"1100px", margin:"0 auto", padding:"20px",},
  header:{
    display:"flex", justifyContent:"space-between", alignItems: "center", marginBottom: "16px",},
  title: {fontSize:"24px",  },
  addButton:{backgroundColor: "green", color: "white", padding: "8px 14px", fontSize: "14px", cursor: "pointer", border: "none"},
  mainRow:{display:"flex", alignItems: "flex-start",marginTop: "16px",gap: "20px", },
  listColumn:{flex:2,},
  aideColumn:{flex: 1,},
};

export default MainPage;