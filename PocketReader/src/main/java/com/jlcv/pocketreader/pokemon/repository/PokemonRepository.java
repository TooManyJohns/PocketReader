package com.jlcv.pocketreader.pokemon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jlcv.pocketreader.pokemon.entity.Pokemon;

@RepositoryRestResource()
public interface PokemonRepository extends JpaRepository<Pokemon, Integer> {

}