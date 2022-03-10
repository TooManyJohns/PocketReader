package com.jlcv.pocketreader.pokemon.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jlcv.pocketreader.pokemon.entity.Pokemon;
import com.jlcv.pocketreader.pokemon.repository.PokemonRepository;

@Service
public class PokemonService {
	
	private PokemonRepository pokemonRepository;

    public PokemonService(PokemonRepository pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    public List<Pokemon> getPokemon() {
        return pokemonRepository.findAll();
    }

}