import { useState } from "react";
import { useDispatch } from "react-redux";
import { add2 } from "./Datas/remote";

function Ajout(props)
{
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState(0);

  const dispatch = useDispatch();

  function handleClick() {
      
      dispatch(add2({id: 5, nom, prix}))

      
  }

    return (
      <>
          <h2>Ajouter un produit</h2>
        <div className="grid">
          
            <input placeholder="Nom" type="text" value={nom} onChange={ (evt) => { setNom(evt.target.value)}} />
            <br />
            <input placeholder="Prix" type="number" step="0.01" value={prix} onChange={ (evt) => {setPrix(evt.target.value)}} />
            <br />
            <button onClick={handleClick}>Ajouter</button>
          
        </div>
      </>
      );  
}

export default Ajout ;