

function Ajout()

{

    return (
        <div>
          <h2>Ajouter un produit</h2>
          <form>
            <label>Nom:</label>
            <input type="text" />
            <br />
            <label>Prix:</label>
            <input type="number" step="0.01" />
            <br />
            <button>Ajouter</button>
          </form>
        </div>
      );  
}

export default Ajout ;