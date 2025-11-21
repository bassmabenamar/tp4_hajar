import React from "react";

function Pagination(props){
  const {currentPage, totalPages, onPageChange} = props;

  if (totalPages <= 1) return null;

  const pages =[];
  for (let p = 1; p <= totalPages; p++) {
    pages.push(p);
  }




  function changePage(p){
    onPageChange(p);
  }

  return (
    <div style={styles.row}>
      {pages.map((p) => (
               <button
           key={p}
          onClick={() => changePage(p)}
           style={p === currentPage ? styles.btnActive : styles.btn}>
          {p}
  </button>
))}
    </div>
  );
}




const styles ={
  row:{marginTop:"16px", display:"flex", gap:"6px" },
   btn: {
    padding: "4px 10px",
     borderRadius: "4px",
     border: "1px solid #dddddd",
    backgroundColor: "#ffffff",
    cursor: "pointer",
   fontSize: "14px",
  },
 btnActive: {
     padding: "4px 10px",
    borderRadius: "4px",
     border: "1px solid #007bff",
    backgroundColor: "#007bff",
   color: "#ffffff",
   cursor: "pointer",
     fontSize: "14px",
   },
};
export default Pagination;