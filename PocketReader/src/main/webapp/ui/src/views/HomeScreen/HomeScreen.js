import React, {useState, useEffect} from "react";
import styled from "styled-components";

import { getAllPokemon } from '../../services/PokemonService'
import logoImg from "../../assets/pocketdexlogo.png";

import Logo from "../../components/Logo/Logo";

const HomeScreen = () => {
  const [pokemonList, setPokemonList] = useState({ id: 0, pokemonName: '' });

  // Similar to component will mount, in order to prevent it from rendering beforehand, 
  // put it in the fetchPokemonList async function above but with current implementation 
  //we can have it display data as soon
  useEffect(() => {
    let mounted = true;
    getAllPokemon()
      .then(items => {
        if(mounted) {
          console.log(items)
          setPokemonList(items)
        }
      })
    return () => mounted = false;
  }, [])
 

    return (
      <Background>
        <DivOne>        
          <DivTwo>  
            <PokemonListTopCard>
              <PokemonListLogoCard>
              <Logo imageUrl={logoImg} backgroundColor={'green'}></Logo>
              </PokemonListLogoCard>
              <PokemonListSearchCard>
                <FilterButton>Filter</FilterButton>
                <TextInput
                  maxLength={320}
                  type="text"
                  placeholder="Pokemon Name"
                ></TextInput>       
                <UploadButton>Search via Upload</UploadButton>       
              </PokemonListSearchCard>
            </PokemonListTopCard>
            <PokemonListMainCard>
              <p>{pokemonList[0]?.id}</p>
              <p>{pokemonList[0]?.pokemonName}</p>
              <p>{pokemonList[1]?.id}</p>
              <p>{pokemonList[1]?.pokemonName}</p>
            </PokemonListMainCard>

          </DivTwo>
        </DivOne>
      </Background>
    );
  }

  export default HomeScreen;


const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  align-items: center;
  background-size: cover;
  top: 0;
  left: 0;
  background-color: #BB0F15;
  display: flex;
  flex-direction: column;
`
const DivOne = styled.div`
  width: 70%;
  height: 100%;
  background-size: cover;
  top: 0;
  left: 0;
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DivTwo = styled.div`
  width: 80%;
  height: 100%;
  background-size: cover;
  top: 0;
  left: 0;
  justify-content: center;
  background-color: green;
  display: flex;
  flex-direction: column;
`

// Holds title, search bar
const PokemonListTopCard = styled.div`
  width: 100%;
  height: 20%;
  justify-content: center;
  background-color: white;
  display: flex;
  flex-direction: column;
`
// Holds logo
const PokemonListLogoCard = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: white;
  display: flex;
  flex-direction: column;
`

// Holds search bar
const PokemonListSearchCard = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  background-color: red;
  align-items: center;
  padding: 10px;
`

// Stores the list of Pokemon that are filtered by the PokemonListtitleCard's Search Card
const PokemonListMainCard = styled.div`
  width: 100%;
  height: 70%;
  background-size: cover;
  justify-content: center;
  background-color: pink;
  display: flex;
  flex-direction: row;
`

const TextInput = styled.input`
  margin-bottom: 5px;
  margin-top: 5px;
  margin-right: 10px;
  margin-left: 10px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border: 3px solid #ccc;
  outline: none;
  border-radius: 15px;
  color: black;
  font-family: Lucida Grande;
  font-size: 1.5em;
  padding:10px;
  ::placeholder {
    color: grey;
    font-family: Lucida Grande;
  }
`;

const UploadButton = styled.button`
  font-size: 1.2em;
  text-align: center;
  border: 3px dark red;
  background-color: grey;
  font-family: Lucida Grande;
  color: white;
  border-radius: 15px;
  margin-bottom: 5px;
  margin-top: 5px;
  height: 100%;
  width: 100%;
`;

const FilterButton = styled.button`
  font-size: 1.2em;
  text-align: center;
  border: 3px dark red;
  background-color: grey;
  font-family: Lucida Grande;
  color: white;
  border-radius: 15px;
  margin-bottom: 5px;
  margin-top: 5px;
  height: 100%;
  width: 100%;
`;


