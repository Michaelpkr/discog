package com.discog.backend.service;

import com.discog.backend.client.SpotifyAuthClient;
import com.discog.backend.config.SpotifyProperties;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SpotifyTokenService {
    private final SpotifyAuthClient authClient;
    private final SpotifyProperties spotifyProperties;
    private String cachedToken;
    private long tokenExpiresAt;
}
