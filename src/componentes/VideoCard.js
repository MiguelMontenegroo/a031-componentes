import React from "react"
import { InfosUsuario } from "./InfoUsuario";

export function CardVideo () {
    

    function reproduzVideo() {
      alert("O vídeo está sendo reproduzido");
    }
        return(
   
  <div className="box-pagina-principal" onClick={reproduzVideo}>
             <InfosUsuario/>
            </div>
   
   
    
        )
    }
