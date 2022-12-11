package com.moviedb.api.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Actor extends BaseEntity {

    @JsonProperty
    private String name;
}
