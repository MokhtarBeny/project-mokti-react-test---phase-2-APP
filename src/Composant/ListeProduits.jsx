import Produit from "./Produit";
import '../styles/ListeProduits.css'

function ListeProduits({liste, nom}) {

  

  return (
    <div  >
      <h2 className="ListeProduits" >Liste des Produits {nom}</h2>    
      {
        liste.map( (ligne, i) =>(
          <Produit key={i} id={ligne.id} nom={ligne.libelle} prix={ligne.prix}/>
        ))
      }
      
    </div>
  );
}

export default ListeProduits;
