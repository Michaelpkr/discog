package com.discog.backend.client;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class SpotifyArtist {

    @JsonProperty("name")
    String name;
    @JsonProperty("followers")
    ArtistFollowers followers;
}
