import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getAllPokemon } from '../../services/PokemonService'
import logoImg from "../../assets/pocketdexlogo.png";

import Logo from "../../components/Logo/Logo";

const HomeScreen = () => {
  const [pokemonList, setPokemonList] = useState({ id: 0, pokemonName: '' });
  const [filterShow, setFilterShow] = useState(false);

  // Similar to component will mount, in order to prevent it from rendering beforehand, 
  // put it in the fetchPokemonList async function above but with current implementation 
  //we can have it display data as soon
  useEffect(() => {
    let mounted = true;
    getAllPokemon()
      .then(items => {
        if (mounted) {
          console.log(items)
          setPokemonList(items)
        }
      })

    return () => mounted = false;
  }, [])
  console.log(filterShow)

  return (
    <Background>
      <Modal>
          <PokemonListTopCard>
            <PokemonListLogoCard>
              <Logo imageUrl={logoImg}></Logo>
            </PokemonListLogoCard>
            <PokemonListSearchCard>
              <FilterButton onClick={
                () => setFilterShow(!filterShow)
              }>Filter</FilterButton>
              <TextInput
                maxLength={320}
                type="text"
                placeholder="Pokemon Name"
              ></TextInput>
              <UploadButton>Search via Upload</UploadButton>
            </PokemonListSearchCard>
          </PokemonListTopCard>
          {
              // Show filter selection if we click filter button
              filterShow &&
              <FilterTableCard>
                <FilterTableSubsectionButton>
                  Filter Eyes
                </FilterTableSubsectionButton>
                <FilterTableSubsectionButton>
                  Filter Legs
                </FilterTableSubsectionButton>
                <FilterTableSubsectionButton>
                  Filter Arms
                </FilterTableSubsectionButton>
                <FilterTableSubsectionButton>
                  Filter Head
                </FilterTableSubsectionButton>
              </FilterTableCard>
            }
          <PokemonListMainCard>
            <p>{pokemonList[0]?.id}</p>
            <p>{pokemonList[0]?.pokemonName}</p>
            <p>{pokemonList[1]?.id}</p>
            <p>{pokemonList[1]?.pokemonName}</p>
          </PokemonListMainCard>
      </Modal>
      <BottomHeader></BottomHeader>
    </Background>
  );
}

export default HomeScreen;

const BottomHeader = styled.div`
  flex: 1;
  background-color: #363636;
  display:flex;
  width:100%;
`
const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: cover;
  top: 0;
  left: 0;
  background-color: #BB0F15;
  display: flex;
  align-items:center;
  flex-direction: column;
`

//We establish flex 45 as it adds up the header and
//modal in login screen, providing consistency for the bottomeheader
//component
const Modal = styled.div`
  background-color: blue;
  min-width: 35em;
  width: 80%;
  padding-bottom: 30px;
  padding-top: 25px;
  padding-right: 30px;
  padding-left: 30px;
  flex-direction: column; 
  flex: 45; 
  display:flex;
  background-color: #AE0E14;
`

// Holds title, search bar
const PokemonListTopCard = styled.div`
  flex-direction: column;
  display:flex;
  flex: 1;
`
// Holds logo
const PokemonListLogoCard = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 10px;
`

// Holds search bar
const PokemonListSearchCard = styled.div`
  flex-direction: row;
  flex: 2;
  background-color: #363636;
  padding: 10px;
  justify-content: center;
  flex-direction: row; 
  display:flex;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

// Stores the list of Pokemon that are filtered by the PokemonListtitleCard's Search Card
const PokemonListMainCard = styled.div`
  width: 100%;
  height: 70%;
  background-size: cover;
  justify-content: center;
  background-color: lightblue;
  display: flex;
  flex-direction: row;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: inset 0px 0px 0px 5px #363636;

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

const FilterTableCard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  background-color: white;
  flex-wrap: wrap;
`

// Flex-basis set to % to eliminate need for fitting an extra item.
const FilterTableSubsectionButton = styled.button`
  flex: 0 29.2%;
  margin: 2%;
  height: 30px;
  background-color: grey;
  color: white;
  font-family: Lucida Grande;
  border: 2 black;
  border-radius: 5px;
`

