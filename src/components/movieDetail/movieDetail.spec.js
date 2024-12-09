import React from "react";
import { render, screen } from "@testing-library/react";
import MovieDetails from "./movieDetail";

describe("MovieDetails Component", () => {
  it("renders the message when no movie is passed", () => {
    render(<MovieDetails />);
    expect(
      screen.getByText("Please select a movie to see the details.")
    ).toBeInTheDocument();
  });
  it("formats and displays the release year correctly", () => {
    const mockMovie = {
      poster_path: "https://image.url/poster.jpg",
      title: "Interstellar",
      release_date: "2014-11-07",
      vote_average: 8.6,
      runtime: 169,
      overview: "A team of explorers travel through a wormhole in space.",
    };

    render(<MovieDetails movie={mockMovie} />);

    // Use a regular expression to match text that spans multiple elements
    expect(
      screen.getByText((content, element) => {
        const hasText = (node) => node.textContent === "Release Year: 2014";
        const elementHasText = hasText(element);
        const childrenDontHaveText = Array.from(element.children).every(
          (child) => !hasText(child)
        );
        return elementHasText && childrenDontHaveText;
      })
    ).toBeInTheDocument();
  });

  it("renders the poster with correct src and alt attributes", () => {
    const mockMovie = {
      poster_path: "https://image.url/possster.jpg",
      title: "The Dark Knight",
      release_date: "2008-07-18",
      vote_average: 9.0,
      runtime: 152,
      overview: "Batman raises the stakes in his war on crime.",
    };

    render(<MovieDetails movie={mockMovie} />);

    const poster = screen.getByAltText("The Dark Knight Poster");

    expect(poster).toHaveAttribute("src", "https://image.url/possster.jpg");
    expect(poster).toHaveAttribute("alt", "The Dark Knight Poster");
  });
});
