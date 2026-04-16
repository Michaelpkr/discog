package com.discog.backend.client;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class SpotifySearchResponse {
    @JsonProperty("bearer_token")
    private String bearerToken;
    @JsonProperty("query")
    private String query;
    @JsonProperty("type")
    private int type;
}
