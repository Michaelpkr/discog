package com.discog.backend.service;

import com.discog.backend.client.SpotifyAuthClient;
import com.discog.backend.client.SpotifyTokenResponse;
import com.discog.backend.config.SpotifyProperties;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
@RequiredArgsConstructor
public class SpotifyTokenService {
    private final SpotifyAuthClient authClient;
    private final SpotifyProperties spotifyProperties;
    private String cachedToken;
    private long tokenExpiresAt;

    public String getAccessToken() {
        if (cachedToken != null && System.currentTimeMillis() < tokenExpiresAt) {
            return cachedToken;
        }
        String credentials = spotifyProperties.getClientId() + ":" + spotifyProperties.getClientSecret();
        String basicAuth = "Basic " + Base64.getEncoder().encodeToString(credentials.getBytes());
        SpotifyTokenResponse response = authClient.getToken(basicAuth, "client_credentials");
        cachedToken = response.getAccessToken();
        tokenExpiresAt = System.currentTimeMillis() + (response.getExpiresIn() - 60) * 1000L;
        return cachedToken;
    }
}