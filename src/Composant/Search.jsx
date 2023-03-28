import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from '../redux'




function Search(props) 
{  
  
  // const [recherche, setRecherche] = useState('')
  const recherche = useSelector(store=>store.data.recherche)

  const dispatch = useDispatch();

  function handleChange (e) {
    dispatch(setSearch(e.target.value))

  }

 

  return (    

    <div className="recherche">
      Recherche ..<input type="text" value={recherche} onChange={handleChange}/>     
    </div>
  );
 
}
export default Search;



