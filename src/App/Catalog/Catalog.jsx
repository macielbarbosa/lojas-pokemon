import React, { Component } from 'react'
import { compose } from 'redux'
import Axios from 'axios'
import { Typography, withStyles } from '@material-ui/core/'

import { withStrings } from 'strings/context'
import { withStore } from 'App/Store/context'
import { Product } from 'App/Product'
import { localStorage } from 'utils/functions'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'flex-start',
    overflow: 'auto',
    padding: 20,
    backgroundColor: theme.palette.storeBackground,
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
  },
})

export class CatalogComponent extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const { catalogUrl, standardizeCatalog, variant } = this.props.store
    const catalogName = 'catalog-' + variant
    const catalogLocal = localStorage.getItem(catalogName)
    if (catalogLocal) this.setState({ products: catalogLocal })
    else {
      const response = await Axios.get(catalogUrl)
      const products = standardizeCatalog(response)
      localStorage.setItem(catalogName, products)
      this.setState({ products })
    }
  }

  get products() {
    const { search } = this.props.store
    const { products } = this.state
    const isProductInSearch = product => product.name.toLowerCase().includes(search.toLowerCase())
    return search === '' ? products : products.filter(isProductInSearch)
  }

  render() {
    const { classes, strings } = this.props
    const { products } = this
    return (
      <div className={classes.root}>
        {products.length > 0 ? (
          this.products.map((product, index) => <Product key={index} value={product} />)
        ) : (
          <Typography variant="body1">{strings.productNotFound}</Typography>
        )}
      </div>
    )
  }
}

export const Catalog = compose(withStyles(styles), withStore, withStrings)(CatalogComponent)
