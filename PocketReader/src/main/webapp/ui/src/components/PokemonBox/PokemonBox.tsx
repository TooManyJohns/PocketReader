import React from 'react';
import styled from "styled-components";

export interface PokemonBoxProps {
    //background color (set default as transparent, being = '')
    pokemonName?: string;
    pokemonNumber?: string;
    pokemonS3Url?: string;
}

const PokemonBox: React.FC<PokemonBoxProps> = ( {pokemonName = '', pokemonNumber = '', pokemonS3Url = ''}) =>
( 
<PokemonBoxCtn>
    <PokemonCard pokemonS3Url= {pokemonS3Url}>
    </PokemonCard>
</PokemonBoxCtn>
);
export default PokemonBox;

// Styled Background component for the background of each screen to fill up, also takes in background color prop
const PokemonBoxCtn = styled.button`
    width: 200px;
    height: 200px;
    background-color: #819EE6;
    margin: 10px;
    display:flex;
    justify-content:center;
    box-shadow: inset 0px 0px 0px 5px #6177AD;
`;

const PokemonCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    margin-top:8px;
    background-image: url(${(props: {pokemonS3Url: string}) => 'https://pocket-dex-bucket.s3.us-east-2.amazonaws.com/' + `${props.pokemonS3Url}` + '.png'});
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
`;
