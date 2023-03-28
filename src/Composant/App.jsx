import ListeProduits from "./ListeProduits";
import { useEffect, useState } from "react";
import Header from "./Header";
import Ajout from "./Ajout";
import axios from "axios";
import { load, load2 } from "./Datas/remote";



function App() {

    const [recherche, setRecherche] = useState("")
    const [data, setdata] = useState([]); 
  
  
    function handleModification(v) {
    
      setRecherche(v)
    }

    async function handleAjout(nom, prix) {
      await axios.post("https://127.0.0.1:800/api/produits", {
        nom: nom,
        prix: prix,
        SousCategorie: "/api/sous_categories/1"
      });

      const response= await load();
      console.log(response);
      setdata(response.data);

    }
  
    const dataFiltered = data.filter((p) => p.nom.search(recherche) >= 0)

  useEffect(  () => {

    // async function fetchData() {
    //   const response = await load();
    //   console.log(response);
    //   setdata(response.data);
    // }
    // fetchData();


    // axios.get("https://127.0.0.1:8000/api/produits", {
    //     headers: {
    //         Accept: "application/json"
    //     }
    // }).then( (response) => {
    //   setdata(response.data);
    // })

    load2().then ( (response) => {
      setdata(response.data);
    } )


  }, []);

  useEffect(  () => {

      console.log("test recherche");
  }, [recherche]);

  return (
    <div className="App">
      <h1>Projet React Shoes Island test </h1>
      <Header onModification={handleModification} />
      <ListeProduits liste={dataFiltered} nom="Catalogue"/>
      <Ajout onAjout={handleAjout} />
      
      
    </div>
  );
}

export default App;
