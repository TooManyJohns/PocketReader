package com.jlcv.pocketreader.pokemon.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;


import lombok.Data;

@Entity
@Data
public class Pokemon {
	
	@Id
	@Column
    private Integer id;

    @Column
    @NotNull(message="{NotNull.Pokemon.pokemonName}")
    private String pokemonName;
    
    @Column
    @NotNull(message="{NotNull.Pokemon.pokemonName}")
    private String keyName;

}