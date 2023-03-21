import ListeProduits from "./ListeProduits";
import { useEffect, useState } from "react";
import Header from "./Header";
import Ajout from "./Ajout";
import axios from "axios";
import '../styles/App.css'
import { load } from "./Datas/remote";



function App() {

	const [recherche, setRecherche] = useState("")
	const [data, setdata] = useState([]);


	function handleModification(v) {

		setRecherche(v)
	}

	async function  handleAjout(nom, prix) {
		await axios.post("https://127.0.0.1:8000/api/produits", {
		  libelle: nom,
		  prix: prix,
		  sousCategorie: "/api/sous_categories/1"
		});
	
		const response = await load();
		console.log(response);
		setdata(response.data);
	  }
	

	const dataFiltered = data.filter((p) => p.libelle.search(recherche) >= 0)

	useEffect(async () => {

		const response = await load();
		console.log(response);
		setdata(response.data);


	}, [])


	return (
		<div className="App">
			<h1>Projet React Shoes Island test </h1>
			<Header onModification={handleModification} />
			<ListeProduits liste={dataFiltered} nom="Catalogue" />
			<Ajout onAjout={handleAjout}/>


		</div>
	);
}

export default App;
