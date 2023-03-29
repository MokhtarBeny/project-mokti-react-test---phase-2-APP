import axios from "axios";
import { load, add } from "../../redux";



const load2 = () => {

    return async (dispatch) => {
        const response = await axios.get("https://127.0.0.1:8000/api/produits", {
            headers: {
                Accept: "application/json"
            }
        });

        dispatch(load(response.data));


    }
                

}; 

const add2 = (obj) => {

    return async (dispatch) => {
        const response = await axios.post("https://127.0.0.1:8000/api/produits", {
            libelle: obj.nom,
            prix: obj.prix,
            sousCategorie: "/api/sous_categories/1"
        });

        dispatch(load2());
    }
                

}; 

export { load2, add2 };
