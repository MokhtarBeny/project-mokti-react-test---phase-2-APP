import ListeProduits from "./ListeProduits";
import { useEffect, useState} from "react";
import Header from "./Header";
import Ajout from "./Ajout";
import axios from "axios";
import '../styles/App.css'



function App() {

  const [recherche, setRecherche] = useState("")
    const [data, setdata] = useState([]); 
  
  
    function handleModification(v) {
    
      setRecherche(v)
    }
  

  const dataFiltered = data.filter( (p) => p.nom.search(recherche)>=0 )

  useEffect( () => {

    console.log("test...")
    axios.get("https://127.0.0.1:8000/api/produits", {

      headers: {
        Accept: "application/json"
      }
    })
    
    .then ( (response) => {
      setdata(response.data)
      console.log(response.data)
    })

  }, [])
  

  return (
    <div className="App">
      <h1>Projet React Shoes Island test </h1>
      <Header onModification={handleModification} />
      <ListeProduits liste={dataFiltered} nom="Catalogue"/>
      <Ajout />
      
      
    </div>
  );
}

export default App;
 