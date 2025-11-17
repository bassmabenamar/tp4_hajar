import React, { useState } from "react";
import AjouterLivre from "./AjouterLivre";
import Livre from "./Livre";
import img1 from "../assets/1.png";

const Livres = [ 
  { title: "1984", author: "George Orwell", publicationYear: 1949, genre: "Dystopian", rating: 4.8, img: img1, price: 150 }, 
  { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960, genre: "Classic", rating: 4.9, img: img1, price: 100 }, 
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925, genre: "Classic", rating: 4.4, img: img1, price: 90 }, 
  { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, genre: "Romance", rating: 4.7, img: img1, price: 100 }, 
  { title: "Moby-Dick", author: "Herman Melville", publicationYear: 1851, genre: "Adventure", rating: 4.1, img: img1, price: 110 }, 
  { title: "War and Peace", author: "Leo Tolstoy", publicationYear: 1869, genre: "Historical Fiction", rating: 4.5, img: img1, price: 130 }, 
  { title: "The Alchemist", author: "Paulo Coelho", publicationYear: 1988, genre: "Philosophical Fiction", rating: 4.7, img: img1, price: 95 }
];

function ListLivre() {
  const[livres,setLivres]=useState(Livres); 
  const[genreFiltre,setGenreFiltre]=useState("All");
  const[showForm,setShowForm]=useState(false);
  const[tri,setTri]=useState("");
  const[search,setSearch]=useState("");


  const goToPage=(page)=>{
    setCurrentPage(page)
  }

  const genres=["All", ...new Set(livres.map(livre => livre.genre))];

  let livresFiltres=genreFiltre==="All" 
    ? livres 
    : livres.filter(livre => livre.genre === genreFiltre);
      if (search.trim() !== "") {
    livresFiltres = livresFiltres.filter(livre =>
      livre.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (tri === "yearAsc") livresFiltres.sort((a,b) => a.publicationYear - b.publicationYear);
  if (tri === "yearDesc") livresFiltres.sort((a,b) => b.publicationYear - a.publicationYear);
  if (tri === "noteAsc") livresFiltres.sort((a,b) => a.rating - b.rating);
  if (tri === "noteDesc") livresFiltres.sort((a,b) => b.rating - a.rating);

  cont[currentPage,setCurrentPage]=useState(1);
  const livresParPage=5;
  const indexLast=currentPage*livresParPage;
  const indexFirst=indexLast-livresParPage;
  const currentLivres=livresFiltres.slice(indexFirst,indexLast);
  const totalPages=Math.ceil(livresFiltres.length/livresParPage);

  const AjoutLivre = (nouveauLivre) => {
    setLivres([...livres, { ...nouveauLivre, img: img1, genre: "Autre" }]); 
  };

  return (
    <div>
       
      <button 
        onClick={()=> setShowForm(!showForm)} 
        style={{marginBottom: "20px" }}
      >
        {showForm ?"cacher le formulaire" :"ajouter un livre"}
      </button>

      {showForm && <AjouterLivre onAdd={AjoutLivre} />}
      <select 
        value={genreFiltre} 
        onChange={(e) =>setGenreFiltre(e.target.value)}
        style={{ marginBottom: "20px", padding: "5px" }}
      >
        {genres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>
       {/* tri */}
      <select 
        value={tri} 
        onChange={(e) => setTri(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", marginRight: "10px" }}
      >
        <option value="">-- Trier par --</option>
        <option value="yearAsc">Année croissante</option>
        <option value="yearDesc">Année décroissante</option>
        <option value="noteAsc">Note croissante</option>
        <option value="noteDesc">Note décroissante</option>
      </select>

      {/* 5) Recherche */}
      <input 
        type="text" 
        placeholder="Rechercher par titre" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

     
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {livresFiltres.map((LivreItem, index) => (
          <Livre 
            key={index} 
            title={LivreItem.title} 
            img={LivreItem.img} 
            price={LivreItem.price} 
          />
        ))}
      </div>
    </div>
  );
}

export default ListLivre;
