import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getAllPokemon } from '../../services/PokemonService'
import { getModel } from '../../services/ModelService'
import logoImg from "../../assets/pocketdexlogo.png";

import Logo from "../../components/Logo/Logo";
import PokemonBox from "../../components/PokemonBox/PokemonBox";
import PokemonComparisonBox from "../../components/PokemonComparisonBox/PokemonComparisonBox";
import * as tf from '@tensorflow/tfjs'
import * as cvstfjs from "@microsoft/customvision-tfjs";

const HomeScreen = () => {
  const [pokemonList, setPokemonList] = useState({ id: 0, pokemonName: '' });
  const [filterShow, setFilterShow] = useState(false);
  const [pokemonUploadImage, setPokemonUploadImage] = useState("");
  const [model, setModel] = useState(false);
  const [predictionList, setPredictionList] = useState([]);
  const [pokemonProbability, setPokemonProbability] = useState("%");
  const [pokemonQueried, setPokemonQueried] = useState("Name");

  const TARGET_CLASSES = {
    0: "Bulbasaur",
    1: "Charmander",
    2: "Squirtle"
  };
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
    getModel()
      .then(items => {
        if (mounted) {
          console.log( "Model loaded." );
          setModel(items)
          console.log(model)
        }
    })
    
    

    return () => mounted = false;
  }, [])
  console.log(`Is filter showing:  ${filterShow}`);

  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    const start = Date.now();
    hiddenFileInput.current.click();
    const duration = Date.now() - start;
    console.log("Time at end of handleclick", duration)
  };

  const handleImgUpload = (event) => {
    setPokemonProbability("%");
    setPokemonQueried("Name");

    const start = Date.now();
    setPokemonUploadImage(event.target.files[0]);
    const duration = Date.now() - start;
    console.log("Time at end of set pokemon upload image", duration)
    setPredictionList([]);
  };

  const handlePredictClick = async event => {
    if (!pokemonUploadImage) { alert("Please select an image first"); return; }
    let model = new cvstfjs.ClassificationModel();
    await model.loadModelAsync('model/model.json');
    const start = Date.now();
    const image = document.getElementById('image1');
    const result = await model.executeAsync(image);
    const duration = Date.now() - start;
    console.log("Time at end of prediction", duration)
    let top5 = (result[0])
		.map(function (p, i) { // this is Array.map
			return {
				probability: p,
				className: TARGET_CLASSES[i] // we are selecting the value from the obj
			};
		}).sort(function (a, b) {
			return b.probability - a.probability;
		}).slice(0, 2);
    console.log(top5[0].className)
    setPokemonProbability(top5[0].probability)
    setPokemonQueried(top5[0].className)
    console.log(`https://pocket-dex-bucket.s3.us-east-2.amazonaws.com/${pokemonQueried}/${pokemonQueried.toLowerCase()}_1.png`)
  };
//  might need, ref to "image"
//    <img id="image" src={URL.createObjectURL(pokemonUploadImage)}></img>



  return (
    <Background>
            {
              // Show loading if model hasnt loaded yet
              !model && 
              <div>LOADING!</div>
            }
            {
              model &&    
      <Modal>
          <PokemonListTopCard>
            <PokemonListLogoCard>
            {
              // Show logo image if we haven't uploaded an image to compare yet
              !pokemonUploadImage &&
              <Logo imageUrl={logoImg}></Logo>
            }
            {
              pokemonUploadImage &&
              <ComparisonBoxCtn>
              <PokemonComparisonBox pokemonImgUrl={pokemonUploadImage}></PokemonComparisonBox>
              <PokemonMatchScoreCtn>
              <PokemonMatchScoreTitleCard>Match Rating %</PokemonMatchScoreTitleCard>
              { pokemonProbability &&
                <div>
                <PokemonMatchScore>{(pokemonProbability*100).toFixed(0)}%</PokemonMatchScore>
                <PokemonNameMatch>{pokemonQueried}</PokemonNameMatch>
                </div>
              }
              </PokemonMatchScoreCtn>
              <PokemonComparisonBox pokemonS3Url={`https://pocket-dex-bucket.s3.us-east-2.amazonaws.com/${pokemonQueried}/${pokemonQueried.toLowerCase()}_1.png`}></PokemonComparisonBox>
              </ComparisonBoxCtn>
            }

            
            </PokemonListLogoCard>
            <PokemonListSearchCard>
              <FilterButton onClick={
                () => setFilterShow(!filterShow)
              }>Filter</FilterButton>
              <FilterButton onClick={
                handlePredictClick
              }>Predict</FilterButton>
              <UploadButton
              onClick={handleClick}>Search via Upload</UploadButton>
              <input type="file"
             ref={hiddenFileInput}
             onChange={handleImgUpload}
             style={{display:'none'}} 
             /> 
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
            <PokemonBox pokemonName={pokemonList[0]?.pokemonName} pokemonNumber={pokemonList[0]?.id} pokemonS3Url={pokemonList[0]?.keyName}></PokemonBox>
            <PokemonBox pokemonName={pokemonList[1]?.pokemonName} pokemonNumber={pokemonList[1]?.id} pokemonS3Url={pokemonList[1]?.keyName}></PokemonBox>
            <PokemonBox pokemonName={pokemonList[2]?.pokemonName} pokemonNumber={pokemonList[2]?.id} pokemonS3Url={pokemonList[2]?.keyName}></PokemonBox>
           </PokemonListMainCard>
      </Modal>
       }
      <BottomHeader></BottomHeader>
      
    </Background>
  );
}

export default HomeScreen;

//Temp styler for containing comparison of images
const ComparisonBoxCtn = styled.div`
  flex: 1;
  display:flex;
  flex-direction: row;
`


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

// Holds Score % of Top match of the pokemom
const PokemonMatchScoreCtn = styled.div`
width: 200px;
height: 300px;
display: flex;
background-color:#660004;
justify-content: center;
flex-direction: column;
align-items: center;
margin:auto; 
border: 3px solid black;
outline: none;
border-radius: 10px;
`
//title of showing match score
const PokemonMatchScoreTitleCard = styled.div`
flex:1;
display: flex;
font-size: 1.5em;
color:white;
bottom:0;
font-family: Lucida Grande;
flex-direction: row;
align-items: end;
padding-bottom: 10px;
`


// Holds Score % of Top match of the pokemom
const PokemonMatchScore = styled.div`
flex:1.9;
display: flex;
background-color:grey;
font-size: 4em;
font-family: Lucida Grande;
color: white;
text-shadow: -2px -2px 0 black,-2px -1px 0 black,-2px 0px 0 black,-2px 1px 0 black,-2px 2px 0 black,-1px -2px 0 black,-1px -1px 0 black,-1px 0px 0 black,-1px 1px 0 black,-1px 2px 0 black,0px -2px 0 black,0px -1px 0 black,0px 0px 0 black,0px 1px 0 black,0px 2px 0 black,1px -2px 0 black,1px -1px 0 black,1px 0px 0 black,1px 1px 0 black,1px 2px 0 black,2px -2px 0 black,2px -1px 0 black,2px 0px 0 black,2px 1px 0 black,2px 2px 0 black;
justify-content: center;
flex-direction: column;
align-items: center;
margin:auto; 
padding:10px;
border: 3px solid black;
outline: none;
border-radius: 10px;
`

// Holds Name of Top match of the pokemom
const PokemonNameMatch = styled.div`
flex:0.3;
display: flex;
background-color:grey;
font-size: 1.2em;
font-family: Lucida Grande;
color: white;
text-shadow: -2px -2px 0 black,-2px -1px 0 black,-2px 0px 0 black,-2px 1px 0 black,-2px 2px 0 black,-1px -2px 0 black,-1px -1px 0 black,-1px 0px 0 black,-1px 1px 0 black,-1px 2px 0 black,0px -2px 0 black,0px -1px 0 black,0px 0px 0 black,0px 1px 0 black,0px 2px 0 black,1px -2px 0 black,1px -1px 0 black,1px 0px 0 black,1px 1px 0 black,1px 2px 0 black,2px -2px 0 black,2px -1px 0 black,2px 0px 0 black,2px 1px 0 black,2px 2px 0 black;
justify-content: center;
flex-direction: column;
align-items: center;
margin:auto; 
padding:10px;
border: 3px solid black;
outline: none;
border-radius: 10px;
margin-bottom: 40px;
`

// Stores the list of Pokemon that are filtered by the PokemonListtitleCard's Search Card
const PokemonListMainCard = styled.div`
  width: 100%;
  height: 70%;
  background-size: cover;
  justify-content: left;
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
  box-shadow: inset 0px 0px 0px 5px #363636;
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

