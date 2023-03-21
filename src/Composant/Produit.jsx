import '../styles/Produit.css'


function Produit({id, nom, prix}) {
  return (
    <div className="produit">

      {id} - {nom}  {prix} €

     
    </div>
  );
}

export default Produit;
