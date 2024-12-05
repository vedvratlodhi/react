import React from "react";
import PropTypes from "prop-types";
import "./MovieDetails.css";

 const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <p>Please select a movie to see the details.</p>;
  }

  const {
    poster_path: imageUrl,
    title: name,
    release_date,
    vote_average: rating,
    runtime: duration,
    overview: description,
  } = movie;

  // Format release year from release_date
  const releaseYear = new Date(release_date).getFullYear();

  return (
    <div className="movie-details">
      {/* Movie Poster */}
      <div className={"posterDiv"}>
        <img className="poster" src={imageUrl} alt={`${name} Poster`} />
      </div>

      {/* Movie Information */}
      <div className="info">
        <h2>{name}</h2>
        <p><strong>Release Year:</strong> {releaseYear}</p>
        <p><strong>Rating:</strong> {rating} / 10</p>
        <p><strong>Duration:</strong> {duration} minutes</p>
        <p><strong>Description:</strong> {description}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};

export default MovieDetails;
