import React, { useState } from "react";

function AjouterLivre({ onAdd }) {
  const[title,setTitle]=useState("");
  const[author,setAuthor]=useState("");
  const[year,setYear]=useState("");
  const[genre,setGenre]=useState("");
  const[rating,setRating]=useState("");
  const[price,setPrice]=useState("");
  const[error,setError]=useState("");

  const genresDisponibles = ["Fantasy","Dystopian","Classic","Romance","Adventure","Historical Fiction","Philosophical Fiction"];

  const checkAll=(e)=> {
    e.preventDefault();
    if (!title || !author || !year || !genre || !rating || !price) {
      setError("tous les champs sont obligatoires");
      return;
    }
    if (Number(year) <= 1500) {
      setError("l'annee doit etre superieure a 1500.");
      return;
    }
    if (Number(rating) < 1 || Number(rating) > 5) {
      setError("La note doit être comprise entre 1 et 5 !");
      return;
    }
    onAdd({title,author,publicationYear: Number(year),genre,rating: Number(rating),price: Number(price),img: "" 
    });
    setTitle("");
    setAuthor(""); 
    setYear(""); 
    setGenre(""); 
    setRating(""); 
    setPrice(""); 
    setError("");
  };

  const Reset = () => {
    setTitle(""); setAuthor(""); setYear(""); setGenre(""); setRating(""); setPrice(""); setError("");
  };

  return (
    <form onSubmit={checkAll} style={{ marginBottom: "20px" }}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input type="text" placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)} style={{ marginRight: "10px" }} />
      <input type="text" placeholder="Auteur" value={author} onChange={e => setAuthor(e.target.value)} style={{ marginRight: "10px" }} />
      <input type="number" placeholder="Année" value={year} onChange={e => setYear(e.target.value)} style={{ marginRight: "10px" }} />
      <select value={genre} onChange={e => setGenre(e.target.value)} style={{ marginRight: "10px" }}>
        <option value="">Sélectionner un genre</option>
        {genresDisponibles.map((g, index) => <option key={index} value={g}>{g}</option>)}
      </select>
      <input type="number" placeholder="Note (1-5)" value={rating} onChange={e => setRating(e.target.value)} style={{ marginRight: "10px" }} />
      <input type="number" placeholder="Prix (DH)" value={price} onChange={e => setPrice(e.target.value)} style={{ marginRight: "10px" }} />
      <button type="submit" style={{ marginRight: "10px" }}>Ajouter</button>
      <button type="button" onClick={Reset}>Réinitialiser</button>
    </form>
  );
}

export default AjouterLivre;