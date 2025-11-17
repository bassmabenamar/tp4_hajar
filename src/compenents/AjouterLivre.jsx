import React, { useState } from "react";

const Livres = [ 
  { title: "1984", author: "George Orwell", publicationYear: 1949, genre: "Dystopian", rating: 4.8, img: img1, price: 150 }, 
  { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960, genre: "Classic", rating: 4.9, img: img1, price: 100 }, 
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925, genre: "Classic", rating: 4.4, img: img1, price: 90 }, 
  { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, genre: "Romance", rating: 4.7, img: img1, price: 100 }, 
  { title: "Moby-Dick", author: "Herman Melville", publicationYear: 1851, genre: "Adventure", rating: 4.1, img: img1, price: 110 }, 
  { title: "War and Peace", author: "Leo Tolstoy", publicationYear: 1869, genre: "Historical Fiction", rating: 4.5, img: img1, price: 130 }, 
  { title: "The Alchemist", author: "Paulo Coelho", publicationYear: 1988, genre: "Philosophical Fiction", rating: 4.7, img: img1, price: 95 }
];

function AjouterLivre({ onAdd }) {
  const[title,setTitle]=useState("");
  const[author,setAuthor]=useState("");
  const[year,setYear]=useState("");
  const[genre,setGenre]=useState("");
  const[rating,setRating]=useState("");
  const[price,setPrice]=useState("");
  const[error,setError]=useState("");

  const genresDisponibles =[...new Set(livres.map(livre=>livre.genre))];

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