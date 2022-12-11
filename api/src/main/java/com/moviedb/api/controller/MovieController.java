package com.moviedb.api.controller;

import com.moviedb.api.model.Movie;
import com.moviedb.api.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.moviedb.api.common.Constant.ENDPOINT_MOVIE;

@RestController
@RequestMapping(ENDPOINT_MOVIE)
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping
    public List<Movie> read(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String genreName,
            Sort sort
    ) {
        return movieService.read(name, genreName, sort);
    }
}
