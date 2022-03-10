package com.jlcv.pocketreader.pokemon.controller;

import com.jlcv.pocketreader.pokemon.entity.Pokemon;
import com.jlcv.pocketreader.pokemon.links.PokemonLinks;
import com.jlcv.pocketreader.pokemon.service.PokemonService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/")
public class PokemonController {
	
	@Autowired
	PokemonService pokemonService;
	
	@GetMapping(path = PokemonLinks.LIST_POKEMON)
    public ResponseEntity<?> listPokemon() {
        List<Pokemon> resource = pokemonService.getPokemon();
        return ResponseEntity.ok(resource);
    }

}