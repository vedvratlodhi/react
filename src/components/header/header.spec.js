import {act} from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import MovieDetails from "../movieDetail/movieDetail";
import SearchForm from "../searchForm/SearchForm";

jest.mock("../movieDetail/movieDetail", () => () => <div>Movie Details Component</div>);
jest.mock("../searchForm/SearchForm", () => jest.fn(() => <div>Search Form Component</div>));

describe("Header Component", () => {
  const mockOnBackToSearch = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });
  
  beforeEach(() => {


  })

  it("renders the header with 'netflix roulette' text", () => {
    render(<Header selectedMovie={null} onBackToSearch={mockOnBackToSearch} />);
    expect(screen.getByText(/netflix/i)).toBeInTheDocument();
    expect(screen.getByText(/roulette/i)).toBeInTheDocument();
  });


  xtest("renders the MovieDetails component when a movie is selected", () => {
    const selectedMovie = {
      title: "The Matrix",
      poster_path: "/matrix.jpg",
      release_date: "1999-03-31",
      vote_average: 8.7,
      runtime: 136,
      overview: "A hacker discovers the truth about his reality.",
    };

    render(<Header selectedMovie={selectedMovie} onBackToSearch={mockOnBackToSearch} />);
    expect(screen.getByText("Movie Details Component")).toBeInTheDocument();
    expect(screen.queryByText("Search")).not.toBeInTheDocument();
  });

});
