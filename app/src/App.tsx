import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import httpClient from './httpClient';
import {ENDPOINT_MOVIE, QUERY_PARAM_RATING} from "./common/constant";
import Movie from "./model/movie";
import Genre from "./model/genre";
import Actor from "./model/actor";
import Input from "./component/input";
import List from "./component/list";

const App = () => {
  const rendered = true;
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState<string>();
  const [genreName, setGenreName] = useState<string>();
  const [rating, setRating] = useState<string>();
  const getMovies = async () => {
    const params = {
      name,
      genreName,
      sort: rating ? QUERY_PARAM_RATING(rating) : undefined
    };
    const movies = await httpClient.get(ENDPOINT_MOVIE, params);
    setMovies(movies);
  };
  const search = () => getMovies();
  const select = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => setRating(value);
  useEffect(() => {
    getMovies();
  }, [rendered, rating]);
  return (
    <div>
      <h1>Movies database</h1>
      <hr />
      <h2>Search</h2>
      <div className="search">
        <Input label="Name:" type="text" value={name} onChange={setName} />
        <Input label="Genre:" type="text" value={genreName} onChange={setGenreName} />
        <button onClick={search}>Search</button>
      </div>
      <hr />
      <h2>Filters</h2>
      Rating:
      <select value={rating} onChange={select}>
        <option></option>
        <option>Asc</option>
        <option>Desc</option>
      </select>
      <hr />
      <table border={1} width="100%">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Release year</th>
            <th>Age recommendation</th>
            <th>Rating (0-5)</th>
            <th>Director</th>
            <th>Genres</th>
            <th>Actors</th>
          </tr>
          {movies?.map(({ id, name, description, releaseYear, ageRecommendation, rating, director, genres, actors }: Movie) =>
            <tr key={id}>
              <td>{name}</td>
              <td>{description}</td>
              <td>{releaseYear}</td>
              <td>{ageRecommendation}</td>
              <td>{rating}</td>
              <td>{director}</td>
              <td>
                <List items={genres.map(({ name }: Genre) => name)} />
              </td>
              <td>
                <List items={actors.map(({ name }: Actor) => name)} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
