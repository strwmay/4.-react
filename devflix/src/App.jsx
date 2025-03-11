import "./App.css";
import Footer from "./components/footer/Footer";
import MovieCard from "./components/movieCard/MovieCard";
// import Logo from ""

const App = () => {
  const movies = [
    {
      Year: "2014",
      Type: "Sci-Fi",
      Title: "Interstellar",
      rating: 8.6,
      Poster: "https://placehold.co/850x480",
    },
    {
      Year: "2010",
      Type: "Action",
      Title: "Inception",
      boxOffice: "$836.8M",
      rating: 8.8,
      Poster: "https://placehold.co/850x480",
    },
    {
      Year: "2010",
      Type: "Action",
      Title: "The Expendables",
      rating: 6.5,
      Poster: "https://placehold.co/850x480",
    },
    {
      Year: "2010",
      Type: "Action",
      Title: "Iron Man 2",
      rating: 7.0,
      Poster: "https://placehold.co/850x480",
    },
    {
      Year: "2010",
      Type: "Action",
      Title: "Robin Hood",
      rating: 6.7,
      Poster: "https://placehold.co/850x480",
    },
    {
      Year: "2010",
      Type: "Action",
      Title: "Shutter Island",
      rating: 8.2,
      Poster: "https://placehold.co/850x480",
    },
    {
      Year: "2010",
      Type: "Action",
      Title: "Kick-Ass",
      rating: 7.6,
      Poster: "https://placehold.co/850x480",
    },
    {
      Year: "2010",
      Type: "Action",
      Title: "Predators",
      rating: 6.4,
      Poster: "https://placehold.co/850x480",
    },
    {
      Year: "2010",
      Type: "Action",
      Title: "The A-Team",
      rating: 6.6,
      Poster: "https://placehold.co/850x480",
    },
    {
      Year: "2010",
      Type: "Action",
      Title: "Clash of the Titans",
      rating: 5.8,
      Poster: "https://placehold.co/850x480",
    },
    {
      Year: "2010",
      Type: "Action",
      Title: "Salt",
      rating: 6.5,
      Poster: "https://placehold.co/850x480",
    },
  ];
  return (
    <div id="app">
      <img className="logo" src={"https://placehold.co/200x200"} alt="logo" />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes..." />
        <img src={"https://placehold.co/20x20"} alt="Pesquisar" />
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