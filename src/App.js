import React, { useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';

export default() =>{
  const [movieList, setMovieList] = useState([]);
  useEffect(()=>{
    const LoadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list);
    }

    LoadAll();
  },[]); 
  return(
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) =>(
            <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}
