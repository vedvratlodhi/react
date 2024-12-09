import React from 'react';
import MovieTile from '../components/movieTile/movieTile';
import '../components/movieTile/movieTile.css';

export default {
  title: 'Components/MovieTile',
  component: MovieTile,
  argTypes: {
    onClick: { action: 'movie clicked' },
    onEdit: { action: 'edit clicked' },
    onDelete: { action: 'delete clicked' },
  },
};

const Template = (args) => <MovieTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: {
    "id": 269149,
    "title": "Zootopia",
    "tagline": "Welcome to the urban jungle.",
    "vote_average": 7.7,
    "vote_count": 6795,
    "release_date": "2016-02-11",
    "poster_path": "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    "overview": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
    "budget": 150000000,
    "revenue": 1023784195,
    "genres": [
        "Animation",
        "Adventure",
        "Family",
        "Comedy"
    ],
    "runtime": 108
},
};

export const AnotherMovie = Template.bind({});
AnotherMovie.args = {
  movie:{
    "id": 284054,
    "title": "Black Panther",
    "tagline": "Long live the king",
    "vote_average": 7.3,
    "vote_count": 3788,
    "release_date": "2018-02-13",
    "poster_path": "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    "overview": "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    "budget": 200000000,
    "revenue": 1245257672,
    "genres": [
        "Action",
        "Adventure",
        "Fantasy",
        "Science Fiction"
    ],
    "runtime": 134
},
};
