import React, { useState } from "react";
const emptyRecipe={
  name:"",
  category:"Plat",
  description: "",
  difficulty: 1,
  ingredients: [""],
  image: "",
};

function RecipeForm(props){
  const {mode, initialRecipe, onSave, onCancel}= props;
  const initialData =
    mode === "edition" && initialRecipe
      ? {
          name: initialRecipe.name || "",
          category: initialRecipe.category || "Plat",
          description: initialRecipe.description || "",
          difficulty:
            typeof initialRecipe.difficulty === "number"
              ? initialRecipe.difficulty
              : 1,
          ingredients:
            initialRecipe.ingredients && initialRecipe.ingredients.length > 0
              ? initialRecipe.ingredients
              : [""],
          image: initialRecipe.image || "",
        }
      : emptyRecipe;

  const [formData, setFormData] = useState(initialData);

  function changeField(e){
    const {name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "difficulty" ? Number(value) : value,
    }));
  }

  function changeIngredient(index, value){
    const copy = [...formData.ingredients];
    copy[index] = value;
    setFormData((prev) => ({ ...prev, ingredients: copy }));
  }

  function addIngredient(){
    setFormData((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ""],
    }));
  }

  function removeIngredient(index){
    const filtered = formData.ingredients.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      ingredients: filtered.length > 0 ? filtered : [""],
    }));
  }

  function changeFile(e){
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, image: url }));
  }

  function submitForm(e){
    e.preventDefault();
    if (!formData.name.trim()){
      alert("Le nom est obligatoire.");
      return;
    }
    const cleanedIngredients = formData.ingredients
      .map((x) => x.trim())
      .filter((x) => x !== "");
    onSave({ ...formData, ingredients: cleanedIngredients });
  }

  return (
  <div style={styles.fule}>
    <div style={styles.formBox}>
      <div style={styles.topBar}>
        <h2 style={styles.title}>
          {mode === "edition" ? "Modifier la recette" : "Nouvelle recette"}
        </h2>
        <button style={styles.closeBtn} onClick={onCancel}>  X </button>
      </div>

      <form onSubmit={submitForm}>
        <div style={styles.ff}>
          <label style={styles.label}>Nom</label>
          <input  style={styles.input}   name="name"   type="text" value={formData.name}  onChange={changeField}  />
        </div>

        <div style={styles.ff}>
          <label style={styles.label}>Catégorie</label>
          <select  style={styles.select}  name="category"   value={formData.category}   onChange={changeField} >
            <option value="Entrée">Entrée</option>
            <option value="Plat">Plat</option>
            <option value="Dessert">Dessert</option>
            <option value="Boisson">Boisson</option>
          </select>
        </div>

        <div style={styles.ff}>
          <label style={styles.label}>Ingrédients</label>
          {formData.ingredients.map((ing, i) => (
            <div key={i} style={styles.row}>
              <input style={styles.input}     value={ing}   
              onChange={(e) => changeIngredient(i, e.target.value)}
              />
              <button type="button"  style={styles.btnS}
                onClick={() => removeIngredient(i)}
              > -  </button>
            </div>
          ))}
          <button type="button"  style={styles.addIngBtn}  onClick={addIngredient} >  + Ajouter ingrédient </button>
        </div>

        <div style={styles.ff}>
          <label style={styles.label}>
            Difficulté : {formData.difficulty}
          </label>
          <input type="range" min="1" max="5" name="difficulty" value={formData.difficulty} onChange={changeField} style={styles.range}/>
        </div>

        <div style={styles.ff}>
          <label style={styles.label}>Description</label>
          <textarea name="description"  value={formData.description} onChange={changeField} style={styles.textarea} />
        </div>

        <div style={styles.ff}>
          <label style={styles.label}>Image</label>
          <input type="file" accept="image/*" onChange={changeFile} />
        </div>

        {formData.image && (
          <img src={formData.image} alt="preview" style={styles.preview} />
        )}

        <div style={styles.btnRow}>
          <button  type="button"     style={styles.cancelBtn}  onClick={onCancel}  >Annuler </button>
          <button type="submit" style={styles.saveBtn}> Enregistrer</button>
        </div>
      </form>
   </div>
</div>
);
 }

const styles={
  fule:{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 },
  formBox:{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px", width: "90%", maxWidth: "600px", maxHeight: "90vh", overflowY: "auto" },
  topBar:{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" },
  title:{fontSize: "18px" },
  closeBtn:{ padding: "4px 8px", fontSize: "12px", cursor: "pointer" },
  ff:{ marginBottom: "10px" },
  label:{fontSize: "14px", marginBottom: "6px", display: "block" },
  input:{ width: "100%", padding: "6px", fontSize: "14px" },
  select:{ width: "100%", padding: "6px", fontSize: "14px" },
  row:{ display: "flex", gap: "8px", marginBottom: "6px" },
  btnS:{ padding: "4px 8px", fontSize: "12px", cursor: "pointer" },
  addIngBtn:{ padding: "4px 8px", fontSize: "12px", cursor: "pointer" },
  range:{ width: "100%", marginTop: "4px" },
  textarea:{ width: "100%", height: "100px", padding: "6px", fontSize: "14px" },
  preview:{ width: "100%", maxHeight: "200px", objectFit: "cover", borderRadius: "6px", marginTop: "8px" },
  btnRow:{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" },
  cancelBtn:{ padding: "6px 10px", fontSize: "14px", cursor: "pointer" },
  saveBtn:{ padding: "6px 10px", fontSize: "14px", cursor: "pointer" },
};


export default RecipeForm;