import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { Store } from 'App/Store'
import { enumStore, POKEMON_API_IMAGE_URL, POKEMON_API_POKEMON_URL, POKEMON_API_TYPE_URL } from 'utils/constants'
import { dragonTheme } from 'theme/dragonTheme'
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

export const DragonStore = () => {
  return (
    <MuiThemeProvider theme={dragonTheme}>
      <Store
        variant={enumStore.dragon}
        catalogUrl={POKEMON_API_TYPE_URL + '/dragon'}
        productUrl={POKEMON_API_POKEMON_URL}
        standardizeCatalog={standardizeCatalog}
      />
    </MuiThemeProvider>
  )
}
