import axios from "axios";
import { useState } from "react";

function Ajout(props)
{
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState(0);

  function handleClick() {
    props.onAjout(nom, prix)
  }

    return (
        <div>
          <h2>Ajouter un produit</h2>
          {/* <form> */}
            <label>Nom:</label>
            <input type="text" value={nom} onChange={ (evt) => { setNom(evt.target.value)}}/>
            <br />
            <label>Prix:</label>
            <input type="number" step="0.01" value={prix} onChange={ (evt) => { setPrix(evt.target.value)}}/>
            <br />
            <button onClick={handleClick}>Ajouter</button>
          {/* </form> */}
        </div>
      );  
}

export default Ajout ;