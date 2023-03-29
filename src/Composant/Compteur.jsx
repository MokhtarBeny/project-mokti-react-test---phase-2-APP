import { useSelector } from "react-redux";



function Compteur() {

  const liste = useSelector(store => store.data.liste)

  
    return <span>{liste.length}</span>
  }












export default Compteur ;