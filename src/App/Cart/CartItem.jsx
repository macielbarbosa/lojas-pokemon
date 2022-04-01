import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Checkbox, IconButton, Typography } from '@material-ui/core'

import { useStore } from 'App/Store/context'
import { priceString } from 'utils/functions'
import { Delete } from '@material-ui/icons'

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
    <div className={classes.root} id="cart-item">
      <div>
        <Checkbox
          id="cart-checkbox"
          checked={product.checked}
          color="primary"
          onChange={() => store.toggleChecked(product.id)}
        />
        <Typography variant="body2">{product.name}</Typography>
      </div>
      <div>
        <Typography variant="body2">{priceString(product.price)}</Typography>
        <IconButton id="cart-remove-button" onClick={() => store.remove(product.id)}>
          {<Delete fontSize="small" />}
        </IconButton>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
}
