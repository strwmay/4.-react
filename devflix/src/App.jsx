import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import MovieCard from "./components/movieCard/MovieCard";
// import Logo from ""

const App = () => {

  const [search,setSearch] = useState("");
  const [movies,setMovies] = useState([]);

  // utilizando chave de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;

  // alimentando com dados para não ficar nulo com o useEffect
  useEffect(() => {
    searchMovies("batman");
  }, []);

  // criando a conexão com a API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    // alimentando o movies
    setMovies(data.Search);
  }

  const handleKeyPress = (e) => { // e = evento | ao clicar ou digitar acontece algo
    e.key === "Enter" && searchMovies(search);
  }

  return (
    <div id="app">
      <img className="logo" src={"https://placehold.co/200x200"} alt="logo" />

      <div className="search">
        <input 
        onKeyDown={handleKeyPress}
        onChange={(e) => setSearch(e.target.value)}
        type="text" placeholder="Pesquise por filmes..." />

        <img 
        onClick={() => searchMovies(search)}
        src={"https://placehold.co/20x20"} alt="Pesquisar" />
      </div>

    {movies.map((movie,index)=> (
      <MovieCard key={index} {...movie} />
    )
    )}

      <Footer 
       devName={"@strwmay"}
       devLink={"https://github.com/strwmay"}
      />
       

    </div>
  );
};

export default App;