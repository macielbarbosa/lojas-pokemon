import { BASE_URL } from '../support/constants'

export const accessStore = (store) => {
  it(`Select ${store} store`, () => {
    cy.visit(BASE_URL)
    cy.get(`#store-selector-${store}`).click()
    cy.url().should('eq', `${BASE_URL}/${store}`)
  })
}

describe('Select stores', () => {
  ;['agua', 'fogo', 'dragao'].forEach(accessStore)
})
