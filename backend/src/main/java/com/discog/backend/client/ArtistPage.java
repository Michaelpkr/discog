package com.discog.backend.client;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class ArtistPage {
    @JsonProperty("items")
    private List<SpotifyArtist> artists;
}
