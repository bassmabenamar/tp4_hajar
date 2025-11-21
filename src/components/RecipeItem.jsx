import React from "react";

function RecipeItem(props){
  const {recipe,onEdit,onDuplicate,onDelete}=props;



  return (
    <div style={styles.card}>
      {recipe.image && (
        <img src={recipe.image} alt={recipe.name} style={styles.image} />
      )}

      <div style={styles.headerRow}>
        <h3 style={styles.name}>{recipe.name}</h3>
        <span style={styles.category}>{recipe.category}</span>
      </div>

      <p style={styles.description}>{recipe.description}</p>

      <div style={styles.ingredientsRow}>
        {recipe.ingredients.map((ing, i) => (
          <span key={i} style={styles.ingredientTag}>
            {ing}
          </span>
        ))}
      </div>

      <p style={styles.difficulty}>
        <strong>Difficulté :</strong> {"🔥".repeat(recipe.difficulty)}
      </p>

      <p style={styles.date}>Créée : {recipe.createdAt}</p>

      <div style={styles.actionsRow}>
        <button style={styles.button} onClick={() => onEdit(recipe.id)}> Modifier  </button>
        <button style={styles.button} onClick={() => onDuplicate(recipe.id)}> Dupliquer </button>
        <button style={{ ...styles.button, backgroundColor:"red" }} onClick={() => onDelete(recipe.id)}>
  Supprimer
</button>
      </div>
    </div>
  );
}

const styles={
  card:{ border:"1px solid #dddddd",borderRadius:"12px", padding:"12px", backgroundColor:"#ffffff", },
  image:{width:"100%", height:"150px",  objectFit:"cover", borderRadius:"8px", marginBottom:"10px",},
  headerRow:{display: "flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px",},
  name:{fontSize:"18px",},
  category:{ backgroundColor:"#eef2ff", padding:"4px 10px", borderRadius:"999px",fontSize:"12px", },
  description:{ fontSize:"14px", marginBottom:"8px",     },
  ingredientsRow:{display:"flex",  flexWrap:"wrap",gap:"6px", marginBottom:"8px",},
  ingredientTag: {backgroundColor: "#f3f3f3",   borderRadius:"999px", padding:"4px 10px",   fontSize:"12px",},
  difficulty:{ fontSize:"14px",   marginBottom:"4px", },
  date:{fontSize:"12px",color:"#666666", },
  actionsRow:{marginTop:"10px", display:"flex",  justifyContent:"space-between", },
  button:{backgroundColor:"blue", color:"white", padding:"6px 10px", fontSize:"13px", cursor:"pointer", border:"none"},
};
export default RecipeItem;