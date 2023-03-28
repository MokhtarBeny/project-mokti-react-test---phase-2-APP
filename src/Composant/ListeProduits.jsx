import Produit from "./Produit";
import '../styles/ListeProduits.css'
import { useSelector } from "react-redux";

function ListeProduits({nom}) {

  const liste = useSelector(store => store.data.liste)
  const recherche = useSelector(store => store.data.recherche);

  const dataFiltered = liste.filter( (p) => p.libelle.search(recherche)>=0 || p.prix.toString().search(recherche)>=0 )

  return (
    <div  >
      <h2 className="ListeProduits" >Liste des Produits {nom}</h2>    
      {
        liste.map( (ligne, i) =>(
          <Produit key={i} id={ligne.id} nom={ligne.nom} prix={ligne.Prix}/>
        
        ))
      }
      
    </div>
  );
}

export default ListeProduits;
