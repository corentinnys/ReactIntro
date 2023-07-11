import React from "react"

function Formulaire({ handleSubmit,  handleChange,task}) {
   
  return (
    <form onSubmit={handleSubmit}>
    <input  onChange={handleChange} type="text" value={task} />
    <button type="submit">Ajouter</button>
  </form>
  );
}




export default Formulaire