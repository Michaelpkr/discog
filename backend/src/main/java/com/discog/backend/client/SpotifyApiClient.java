package com.discog.backend.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "spotifyApi", url = "https://api.spotify.com")
public interface SpotifyApiClient {

    @GetMapping(value = "/v1/search")
    public SpotifySearchResponse search (@RequestHeader("Authorization") String bearerToken, @RequestParam("q") String query, @RequestParam("type") String type, @RequestParam("offset") int offset);

    @GetMapping(value = "/v1/search")
    String searchRaw(@RequestHeader("Authorization") String bearerToken, @RequestParam("q") String query, @RequestParam("type") String type);

    @GetMapping("/v1/artists/{id}")
    SpotifyArtist getArtist(@RequestHeader("Authorization") String bearerToken, @PathVariable("id") String id);

    @GetMapping("/v1/artists/{id}")
    String getRawArtist(@RequestHeader("Authorization") String bearerToken, @PathVariable("id") String id);
}

