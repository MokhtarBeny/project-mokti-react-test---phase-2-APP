import Compteur from"./Compteur";
import Search from "./Search";



function Header(props) {

  

    return (
      <div className="App">
        <Compteur />
        <Search onModification = {props.onModification}  />
        
        
        
      </div>
    );
  }


export default Header ;