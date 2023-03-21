import { useState } from "react";



function Search(props) 
{  
  
  const [recherche, setRecherche] = useState('')

  function handleChange (e) {
    setRecherche(e.target.value)
    props.onModification(e.target.value)

  }

 

  return (    

    <div className="recherche">
      Recherche ..<input type="text" value={recherche} onChange={handleChange}/>     
    </div>
  );
 
}
export default Search;



