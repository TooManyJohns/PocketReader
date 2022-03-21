import React from 'react';
import styled from "styled-components";

export interface PokemonProps {
    //background color (set default as transparent, being = '')
    pokemonList?: string;
}

const Pokemon: React.FC<PokemonProps> = ( {pokemonList = ''}) =>
( 
<PokemonCtn>
    Pokemon List: {pokemonList}
</PokemonCtn>
);
export default Pokemon;

// Styled Background component for the background of each screen to fill up, also takes in background color prop
const PokemonCtn = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    `;

