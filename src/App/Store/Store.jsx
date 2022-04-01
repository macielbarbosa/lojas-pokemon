import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Paper } from '@material-ui/core'
import { VscSearch } from 'react-icons/vsc'

import { Page } from 'App/common/Page'
import { StoreContext } from './context'
import { Catalog } from 'App/Catalog'
import { localStorage } from 'utils/functions'
import { Cart } from 'App/Cart'

export class StoreComponent extends Component {
  static propTypes = {
    variant: PropTypes.string.isRequired,
    catalogUrl: PropTypes.string.isRequired,
    productUrl: PropTypes.string.isRequired,
    standardizeCatalog: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    const { variant } = props
    const cart = localStorage.getItem('cart-' + variant)
    this.state = {
      cart: cart ? cart : [],
      search: '',
    }
  }

  setCart = (cart) => {
    localStorage.setItem('cart-' + this.props.variant, cart)
    this.setState({ cart })
  }

  add = (value) => {
    const { cart } = this.state
    const isIncluded = cart.some((product) => product.id === value.id)
    if (!isIncluded) {
      value.checked = true
      const cart = [...this.state.cart, value]
      this.setCart(cart)
    }
  }

  remove = (id) => {
    const { cart } = this.state
    const index = cart.findIndex((product) => product.id === id)
    cart.splice(index, 1)
    this.setCart(cart)
  }

  toggleChecked = (id) => {
    const { cart } = this.state
    const index = cart.findIndex((product) => product.id === id)
    cart[index].checked = !cart[index].checked
    this.setCart(cart)
  }

  finish = () => {
    const { cart } = this.state
    this.setCart(cart.filter((product) => !product.checked))
  }

  onChangeSearch = (event) => {
    this.setState({ search: event.target.value })
  }

  get providerValue() {
    const { variant, catalogUrl, productUrl, standardizeCatalog } = this.props
    const { cart, search } = this.state
    return {
      variant,
      catalogUrl,
      productUrl,
      standardizeCatalog,
      cart,
      search,
      add: this.add,
      remove: this.remove,
      toggleChecked: this.toggleChecked,
      finish: this.finish,
    }
  }

  render() {
    const { classes, strings } = this.props
    return (
      <Page>
        <Paper className={classes.root}>
          <StoreContext.Provider value={this.providerValue}>
            <Input
              className={classes.search}
              startAdornment={<VscSearch size={24} />}
              placeholder={strings.search}
              onChange={this.onChangeSearch}
              fullWidth
              id="store-search-input"
            />
            <div className={classes.section}>
              <Catalog />
              <Cart />
            </div>
          </StoreContext.Provider>
        </Paper>
      </Page>
    )
  }
}
