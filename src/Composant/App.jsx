import ListeProduits from "./ListeProduits";
import { useEffect, useState } from "react";
import Header from "./Header";
import Ajout from "./Ajout";
import axios from "axios";
import { load2 } from './Datas/remote';

import { useDispatch, useSelector } from "react-redux";


function App() {

    const recherche = useSelector(store => store.data.recherche);
  
    const dispatch = useDispatch();
    

  useEffect(  () => {

    dispatch(load2());
    

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
