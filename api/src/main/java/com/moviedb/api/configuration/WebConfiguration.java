package com.moviedb.api.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import static com.moviedb.api.common.Constant.CORS_ALLOWED_METHODS;
import static com.moviedb.api.common.Constant.CORS_ALLOWED_ORIGINS;
import static com.moviedb.api.common.Constant.CORS_PATH_PATTERN;

@Configuration
public class WebConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping(CORS_PATH_PATTERN)
                .allowedOrigins(CORS_ALLOWED_ORIGINS)
                .allowedMethods(CORS_ALLOWED_METHODS);
    }
}
