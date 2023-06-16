import { MovieObject } from "../data";
import { MoviesContainer } from "../styles/components/MoviesContainer.styled";
import { Movie } from "./Movie";

type MoviesProps = {
  movieObjects: MovieObject[];
};
function Movies({ movieObjects }: MoviesProps): JSX.Element {
  return <MoviesContainer>{movieObjects.map((element) => Movie(element))}</MoviesContainer>;
}
export default Movies;
