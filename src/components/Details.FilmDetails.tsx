import { useState } from "react";
import { iFilm } from "../models/interface";
import { FilmHttpStore } from "../services/films.http.store";

export function FilmDetails({id}: {id:number}) {
const initialState: iFilm = {
    id: 0,
    overview: "",
    poster_path: "",
    release_date: "",
    title: "",
    vote_average: 0
}
const[infoPeli,writePeli]= useState(initialState)
const cookie = new FilmHttpStore()

cookie.getFilm(id).then((pelicula) =>{
   
     writePeli(pelicula)
})



    const template = (<>
 <section>
<img src={infoPeli.poster_path} alt=""/>
<article>
    <h2 className="Tittle__film">{infoPeli.title}</h2>
     <ul className="Description">
      <li>Sinopsis:{infoPeli.overview}</li>
      <li>Estreno:{infoPeli.release_date}</li>
      <li>Puntuación:{infoPeli.vote_average}</li>
     </ul>
<video src=""></video>
</article>
 </section>
    
    </>)
    
    ;
    return template;
}
