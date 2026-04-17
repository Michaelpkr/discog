package com.discog.backend.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;

@FeignClient(name = "spotifyAuth", url = "https://accounts.spotify.com")
public interface SpotifyAuthClient {

    @PostMapping(value = "/api/token", consumes = "application/x-www-form-urlencoded")
    SpotifyTokenResponse getToken(@RequestHeader("Authorization") String basicAuth, @RequestPart("grant_type") String grantType);
}
