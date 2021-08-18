import React from 'react'
import { ThemeProvider } from '@material-ui/core'

import { Store } from 'App/Store'
import { enumStore, POKEMON_API_IMAGE_URL, POKEMON_API_POKEMON_URL, POKEMON_API_TYPE_URL } from 'utils/constants'
import { fireTheme } from 'theme/fireTheme'
import { capitalizeFirstLetter, getRandomPrice } from 'utils/functions'

const standardizeCatalog = response =>
  response.data.pokemon.map(({ pokemon }) => {
    const id = pokemon.url.match(/pokemon\/([0-9]+)\//)[1]
    return {
      name: capitalizeFirstLetter(pokemon.name),
      url: pokemon.url,
      id,
      imageUrl: `${POKEMON_API_IMAGE_URL}/${id}.png`,
      price: getRandomPrice(),
    }
  })

export const FireStore = () => {
  return (
    <ThemeProvider theme={fireTheme}>
      <Store
        variant={enumStore.fire}
        catalogUrl={POKEMON_API_TYPE_URL + '/fire'}
        productUrl={POKEMON_API_POKEMON_URL}
        standardizeCatalog={standardizeCatalog}
      />
    </ThemeProvider>
  )
}
