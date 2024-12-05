import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter/Counter";
import GenreSelect from "./components/genreSelect/GenreSelect";
import SearchForm from "./components/searchForm/SearchForm";
import MovieList from "./components/movieList/movieList";
import Header from "./components/header/Header";
import { useState } from "react";
import SortControl from "./components/sortControl/sortControl";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortBy, setSortBy] = useState("release_date");

  const handleMovieSelect = (movie) => {
  ///  alert(movie)
    setSelectedMovie(movie);
  };

 
  const handleSortChange = (newSortValue) => {
    setSortBy(newSortValue); // Update the sort selection
  };

  const handleBackToSearch = () => {
    setSelectedMovie(null); // Reset to show SearchForm
  };
  return (
    <div className="App">
      <div className="content">
        <Header  selectedMovie={selectedMovie}  onBackToSearch={handleBackToSearch}></Header>
        <div className="bckcolor">
          <GenreSelect
            genres={["Action", "Comedy", "Drama", "Horror"]}
            selectedGenre="Drama"
            />
          
          <SortControl className="sortControl" currentSelection={sortBy} onSortChange={handleSortChange} />
          <MovieList onMovieSelect={handleMovieSelect} sortBy={sortBy}/>
        </div>
      </div>
    </div>
  );
}

export default App;
