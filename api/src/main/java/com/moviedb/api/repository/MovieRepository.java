package com.moviedb.api.repository;

import com.moviedb.api.model.Movie;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findByNameIgnoreCaseAndGenresNameIgnoreCase(String name, String genreName, Sort sort);
    List<Movie> findByNameIgnoreCaseOrGenresNameIgnoreCase(String name, String genreName, Sort sort);
}
