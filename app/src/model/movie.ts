import Genre from "./genre";
import Actor from "./actor";
import Model from "./model";

interface Movie extends Model {
  name: string;
  description: string;
  releaseYear: number;
  ageRecommendation: number;
  rating: number;
  director: string;
  genres: Genre[];
  actors: Actor[];
}

export default Movie;
