package com.discog.backend.client;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class ArtistFollowers {
    @JsonProperty("total")
    int total;
}
