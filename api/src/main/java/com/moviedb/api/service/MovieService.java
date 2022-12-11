package com.moviedb.api.service;

import com.moviedb.api.model.Movie;
import com.moviedb.api.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> read(String name, String genreName, Sort sort) {
        if (name == null && genreName == null) return movieRepository.findAll(sort);
        if (name != null && genreName != null)
            return movieRepository.findByNameIgnoreCaseAndGenresNameIgnoreCase(name, genreName, sort);
        return movieRepository.findByNameIgnoreCaseOrGenresNameIgnoreCase(name, genreName, sort);
    }
}
