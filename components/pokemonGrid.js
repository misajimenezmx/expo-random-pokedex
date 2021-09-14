import React from 'react'
import { FlatList } from 'native-base'
import PokemonCard from './pokemonCard'

export default function PokemonGrid({data}) {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <PokemonCard {...item} />
            )}
            keyExtractor={(item) => item.name}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            contentContainerStyle={{marginHorizontal: 10, height: 1650}}
        />
    )
}