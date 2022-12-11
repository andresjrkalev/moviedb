package com.moviedb.api.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import lombok.*;

import java.util.List;

@Data
@Entity
@JsonRootName("movie")
public class Movie extends BaseEntity {

    @JsonProperty
    private String name;

    @JsonProperty
    private String description;

    @JsonProperty
    private int releaseYear;

    @JsonProperty
    private int ageRecommendation;

    @JsonProperty
    private int rating;

    @JsonProperty
    private String director;

    @ManyToMany
    @JsonProperty
    private List<Genre> genres;

    @ManyToMany
    @JsonProperty
    private List<Actor> actors;
}
