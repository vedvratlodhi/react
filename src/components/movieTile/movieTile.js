import React from 'react';
import './movieTile.css';

const MovieTile = ({
  movie: { poster_path , title, release_date, genres } = {},
  onClick,
  onEdit,
  onDelete,
}) => {
  const handleClick = () => {
    if (onClick) onClick(title);
  };

  const handleEdit = () => {
    if (onEdit) onEdit(title);
  };

  const handleDelete = () => {
    if (onDelete) onDelete(title);
  };

  return (
    <div className="movie-tile" onClick={handleClick}>
      <img src={poster_path} alt={title} className="movie-image" />
      <div className="movie-details">
        <h3>{title}</h3>
        <p>{release_date}</p>
        <p>{genres.join(', ')}</p>
      </div>
      <div className="menu">
        <button className="menu-button">⋮</button>
        <div className="context-menu">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MovieTile;
