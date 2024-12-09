import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieList from "./movieList";
import MovieTile from "../movieTile/movieTile";


describe("MovieList Component", () => {
    it('renders movies correctly', () => {
        const movies = [
          { title: "Star Wars" },
          { title: "The Lord of the Rings" },
        ];
        const { getByText } = render(<MovieList movies={movies} onMovieSelect={() => {}} sortBy="release_date" />);
        expect(getByText(/Star Wars/i)).toBeInTheDocument();
      });
});
