package com.discog.backend.client;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class SpotifyImage {
    @JsonProperty
    String url;
    @JsonProperty
    int height;
    @JsonProperty
    int width;
}
