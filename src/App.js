import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import GenreSelect from './components/genreSelect/GenreSelect';
import SearchForm from './components/searchForm/SearchForm';
import MovieList from './components/movieList/movieList';



function App() {


  return (
    <div className="App">
      
      <Counter initialValue={100}/>
      <SearchForm/>
      <GenreSelect
  genres={['Action', 'Comedy', 'Drama', 'Horror']}
  selectedGenre="Drama"
/>
<MovieList/>



</div>
      
  );
}

export default App;
