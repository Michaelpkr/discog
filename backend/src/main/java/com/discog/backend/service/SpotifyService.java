package com.discog.backend.service;

import com.discog.backend.client.SpotifyApiClient;
import com.discog.backend.client.SpotifyArtist;
import com.discog.backend.client.SpotifySearchResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SpotifyService {
    private final SpotifyTokenService spotifyTokenService;
    private final SpotifyApiClient spotifyApiClient;

    public List<SpotifyArtist> getObscureArtists(String query)
    {
        String token = spotifyTokenService.getAccessToken();
        int offset = new java.util.Random().nextInt(200);
        SpotifySearchResponse response = spotifyApiClient.search("Bearer " +
                token, query, "artist", offset);

        return response.getArtists().getArtists().stream()
                .map(artist -> spotifyApiClient.getArtist("Bearer " + token, artist.getId()))
                .filter(artist -> artist.getImages() != null && !artist.getImages().isEmpty())
                .limit(10)
                .toList();
    }
}