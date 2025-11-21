import React from "react";
import RecipeItem from "./RecipeItem";

function RecipeList(props){
  const {recipes, onEdit, onDuplicate, onDelete}=props;

  if (recipes.length === 0){
    return <p style={styles.empty}>Aucune recette trouvée.</p>;
  }

  return (
    <div style={styles.cc}>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={styles.itemCc}>
          <RecipeItem
            recipe={recipe}
            onEdit={onEdit}
            onDuplicate={onDuplicate}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
}

const styles={
  cc:{display:"flex", flexWrap:"wrap", gap:"16px",},
  itemCc:{width:"260px", },
  empty:{fontSize:"14px",},
};
export default RecipeList;