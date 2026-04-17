package com.discog.backend.controller;

import com.discog.backend.client.SpotifyArtist;
import com.discog.backend.service.SpotifyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/artists")
@RequiredArgsConstructor
public class ArtistController {
    private final SpotifyService spotifyService;

    @CrossOrigin(origins = {"http://localhost:5173", "https://ario-three.vercel.app"})
    @GetMapping("/obscure")
    List<SpotifyArtist> obscureArtists(@RequestParam String query) {
       return spotifyService.getObscureArtists(query);
    }
}