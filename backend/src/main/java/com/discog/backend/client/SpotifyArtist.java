package com.discog.backend.client;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class SpotifyArtist {

    @JsonProperty("name")
    String name;
    @JsonProperty("followers")
    ArtistFollowers followers;
    @JsonProperty("popularity")
    Integer popularity;
    @JsonProperty("id")
    String id;
    @JsonProperty("images")
    List<SpotifyImage> images;
}