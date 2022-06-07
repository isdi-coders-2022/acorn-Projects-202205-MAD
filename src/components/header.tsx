import { Link } from "react-router-dom";
import { Navigation } from "./Navigation";




export function Header(){

    return(
        <header>    
   
      
     
            <Link to=''><img id="logo" src="./img/logo.png"/></Link>            
          <Navigation/> 

        </header>
 
    )
};