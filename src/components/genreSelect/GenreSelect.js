import React, { useState } from 'react';

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
          style={{
            backgroundColor: genre === selectedGenre ? '#007BFF' : '#ccc',
            color: genre === selectedGenre ? '#fff' : '#000'
          }}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreSelect;
