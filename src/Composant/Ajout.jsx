import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux";

function Ajout(props)
{
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState(0);

  const dispatch = useDispatch();

  function handleClick() {
      // await axios.post("https://127.0.0.1:800/api/produits", {
      //   nom: nom,
      //   prix: prix,
      //   SousCategorie: "/api/sous_categories/1"
      // });

      // const response= await load();
      // console.log(response);
      // setdata(response.data);
      dispatch(add({id: 5, nom, prix}))
  }

    return (
        <div>
          <h2>Ajouter un produit</h2>
          
            <label>Nom:</label>
            <input type="text" value={nom} onChange={ (evt) => { setNom(evt.target.value)}} />
            <br />
            <label>Prix:</label>
            <input type="number" step="0.01" value={prix} onChange={ (evt) => {setPrix(evt.target.value)}} />
            <br />
            <button onClick={handleClick}>Ajouter</button>
          
        </div>
      );  
}

export default Ajout ;