import ListeProduits from "./ListeProduits";
import { useEffect, useState } from "react";
import Header from "./Header";
import Ajout from "./Ajout";
import axios from "axios";
import { load2 } from "./Datas/remote";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../redux";


function App() {

    // const [recherche, setRecherche] = useState("")
    // const [data, setdata] = useState([]); 
    
    const recherche = useSelector(store => store.data.recherche);
  
    const dispatch = useDispatch();
    

    
  
    //const dataFiltered = data.filter((p) => p.nom.search(recherche) >= 0)

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
      dispatch(load(response.data));
    } )


  }, []);

  

  return (
    <div className="App">
      <h1>Projet React Shoes Island test </h1>
      <h1>{recherche}</h1>
      <Header />
      <ListeProduits nom="Catalogue"/>
      <Ajout />
      
      
    </div>
  );
}

export default App;
