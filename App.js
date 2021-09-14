import React, { useState, useEffect } from "react";
import {
  NativeBaseProvider,
  Box,
  extendTheme,
} from "native-base";
import PokeApi from "./services/pokeApi";
import CustomSpinner from "./components/customSpinner";
import SuffleButton from "./components/suffleButton";
import Header from "./components/header";
import PokemonGrid from "./components/pokemonGrid";

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const customTheme = extendTheme({ config });

export default function App() {
  const [{isLoading, data }, setPokemons] = useState({isLoading: true, data: []})
  
  const updatePokemons = async (refresh = false) => {
    if(refresh){
      await setPokemons({data: [], isLoading: true})
    }
    const data = await PokeApi.getRandomPokemons()
    setPokemons({data, isLoading: false})
  }
  
  useEffect(() => {
    updatePokemons()
  }, [])
  
  return (
    <NativeBaseProvider theme={customTheme} >
      <Box flex={1} bg="gray.800" safeArea>
        <Header />
        {isLoading ?
          <CustomSpinner />
          :
          <PokemonGrid data={data} />
        }
      </Box>
      <SuffleButton onPress={() => updatePokemons(true)} />
    </NativeBaseProvider>
  );
}
