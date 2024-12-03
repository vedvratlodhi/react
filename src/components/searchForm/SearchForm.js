import React, { useState } from 'react';
import './search.css';

const SearchForm = ({ initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log(query);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log(query);
    }
  };

  return (
    <div className='searchDiv'>
      <div class="messsageDiv">
      FIND YOUR MOVIE</div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="What do you want to watch?"
      />
      <button onClick={handleSearch} className='button'>
        SEARCH
      </button>
    </div>
  );
};

export default SearchForm;
