import axios from "axios";

async function load() {

    const response = await axios.get("https://127.0.0.1:8000/api/produits", {
        headers: {
            Accept: "application/json"
        }
    });

    
    return response;
}


function load2() {

    const promesse = axios.get("https://127.0.0.1:8000/api/produits", {
        headers: {
            Accept: "application/json"
        }
    });

    
    return promesse;
}

export { load, load2 }; 