import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Checkbox, Typography } from '@material-ui/core'

import { useStore } from 'App/Store/context'
import { priceString } from 'utils/functions'

const displayFlex = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const useStyles = makeStyles(() => ({
  root: {
    ...displayFlex,
    '& > *': displayFlex,
  },
}))

export const CartItem = ({ product }) => {
  const classes = useStyles()
  const store = useStore()
  return (
    <div className={classes.root}>
      <div>
        <Checkbox checked={product.checked} color="primary" onChange={() => store.toggleChecked(product.id)} />
        <Typography variant="body2">{product.name}</Typography>
      </div>
      <div>
        <Typography variant="body2">{priceString(product.price)}</Typography>
        <button onClick={() => store.remove(product.id)}>remover</button>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
}
