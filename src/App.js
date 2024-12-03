import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter/Counter";
import GenreSelect from "./components/genreSelect/GenreSelect";
import SearchForm from "./components/searchForm/SearchForm";
import MovieList from "./components/movieList/movieList";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header></Header>
        <div className="bckcolor">
          <GenreSelect
            genres={["Action", "Comedy", "Drama", "Horror"]}
            selectedGenre="Drama"
          />
          <MovieList />
        </div>
      </div>
    </div>
  );
}

export default App;
