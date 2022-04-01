import { accessStore } from './storeSelector.spec'

const search = (word) => {
  it(`Search work "${word}"`, () => {
    cy.get('#store-search-input').type(word)
  })
}

const addItem = (index) => {
  it(`Add item ${index}`, () => {
    cy.get('body #store-add-button').eq(index).click()
  })
}

const removeFromCart = (index) => {
  it(`Remove item ${index} from cart`, () => {
    cy.get('body #cart-remove-button').eq(index).click()
  })
}

describe('Perform full flow', () => {
  accessStore('agua')
  addItem(0)
  addItem(1)
  search('Poliwag')
  it('Add Poliwag to cart', () => {
    cy.get('#store-add-button').click()
  })
  removeFromCart(0)
  it('Finalize the purchase', () => {
    cy.get('#cart-finalize-button').click()
    cy.get('body').contains('Obrigado')
  })
})
