import React, { useState } from 'react';
import './genreSelect.css'

function GenreSelect  ({ genres, selectedGenre: initialSelectedGenre = '' }) {
  const [selectedGenre, setSelectedGenre] = useState(initialSelectedGenre);

  const handleSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => handleSelect(genre)}
          className={`genrebutton ${genre === selectedGenre ? 'selected' : ''}`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreSelect;
