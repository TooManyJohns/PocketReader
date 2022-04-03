import React from 'react';
import styled from "styled-components";

export interface PokemonComparisonBoxProps {
    //background color (set default as transparent, being = '')
    pokemonImgUrl: any;
    //Temporary S3 value for testing container
    pokemonS3Url: string;
}

const PokemonComparisonBox: React.FC<PokemonComparisonBoxProps> = ({ pokemonImgUrl = '', pokemonS3Url = ''}) =>
( 
<PokemonComparisonBoxCtn>
    {
        pokemonImgUrl &&
        <div>
        <PokemonInputTitle>Input Pokemon</PokemonInputTitle>
        <PokemonComparisonCard pokemonImgUrl= {URL.createObjectURL(pokemonImgUrl)}></PokemonComparisonCard>
        </div>
    }
        {
        !pokemonImgUrl &&
        <div>
        <PokemonInputTitle>Queried Pokemon</PokemonInputTitle>
        <PokemonComparisonCard pokemonImgUrl= {pokemonS3Url}></PokemonComparisonCard>
        </div>
    }
</PokemonComparisonBoxCtn>
);
export default PokemonComparisonBox;

// Styled component named StyledButton
const PokemonComparisonBoxCtn = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin:auto; 
`;

const PokemonInputTitle = styled.div`
    font-family: Lucida Grande;
    font-size: 1.5em;
    padding-bottom: 10px;
    color: black;
`;

// Styled component named Logo
const PokemonComparisonCard = styled.div`
  background-image: url(${(props: {pokemonImgUrl: string}) => props.pokemonImgUrl});
  width: 200px;
  background-color: #819EE6;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  display: block;
  background-position: center;
  box-sizing: border-box;
  border: 3px solid #6177AD;
  outline: none;
  border-radius: 10px;
  `;