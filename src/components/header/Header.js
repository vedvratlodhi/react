import MovieDetails from "../movieDetail/movieDetail";
import SearchForm from "../searchForm/SearchForm";
import "./header.css";

export default function Header({ selectedMovie, onBackToSearch }) {
  return (
    <div>
      <div className="blur-background headerDiv">
        <div className={selectedMovie ? "non-blur" : "blur-overlay"}>
          <div className="header-top">
            <div className="nameDiv">
              <strong>netflix</strong>roulette
              <div>
                {selectedMovie && (
                  <button className="search-button" onClick={onBackToSearch}>
                    Search
                  </button>
                )}
              </div>
            </div>
          </div>
          {selectedMovie ? (
            <div className="MovieDetailsdiv">
              <MovieDetails movie={selectedMovie} />{" "}
            </div>
          ) : (
            <SearchForm />
          )}
        </div>
      </div>
    </div>
  );
}
