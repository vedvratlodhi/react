import React from 'react';
import './movieTile.css';

const MovieTile = ({
  movie: {id, poster_path , title, release_date, genres } = {},
  onClick,
  onEdit,
  onDelete,
}) => {
  const handleClick = () => {
    if (onClick) onClick(id,title);
  };

  const handleEdit = () => {
    if (onEdit) onEdit(id,title);
  };

  const handleDelete = () => {
    if (onDelete) onDelete(id,title);
  };

  return (
    <div className="movie-tile" onClick={handleClick}>
      <img src={poster_path} alt={title} className="movie-image" />
      <div className="movie-details">
        <div style={{'float': 'right'}}>{new Date(release_date).getFullYear()}</div>
       < div  style={{'float': 'left'}}>

        <p>{title}</p>
        <p>{genres.join(', ')}</p>
       </div>
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
