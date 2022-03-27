import React from 'react';
import styled from "styled-components";

export interface PokemonBoxProps {
    //background color (set default as transparent, being = '')
    pokemonName?: string;
    pokemonImageURI?: string;
}

const PokemonBox: React.FC<PokemonBoxProps> = ( {pokemonName = ''}) =>
( 
<PokemonBoxCtn>
    Pokemon name: {pokemonName}
</PokemonBoxCtn>
);
export default PokemonBox;

// Styled Background component for the background of each screen to fill up, also takes in background color prop
const PokemonBoxCtn = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
`;

