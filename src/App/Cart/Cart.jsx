import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Typography, Button } from '@material-ui/core'
import { AiOutlineShopping } from 'react-icons/ai'

import { useStrings } from 'strings/context'
import { useStore } from 'App/Store/context'
import { priceString } from 'utils/functions'
import { CartItem } from './CartItem'
import { ThankYouDialog } from './ThankYouDialog'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    display: 'flex',
    flexDirection: 'column',
    borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.down('xs')]: {
      minWidth: 'auto',
      maxHeight: 250,
    },
  },
  items: {
    height: '100%',
    overflowY: 'auto',
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
  },
  finish: {
    height: 50,
  },
  title: {
    padding: 10,
  },
}))

export const Cart = () => {
  const classes = useStyles()
  const strings = useStrings()
  const store = useStore()
  const [openDialog, setOpenDialog] = useState(false)
  const [totalPurchase, setTotalPurchase] = useState(0)
  const total = store.cart.reduce((total, product) => total + (product.checked ? product.price : 0), 0)

  const onFinish = () => {
    setTotalPurchase(total)
    setOpenDialog(true)
    store.finish()
  }

  return (
    <div className={classes.root} id="cart">
      <Typography className={classes.title} variant="h6">
        {strings.cart}
      </Typography>
      <Divider />
      <div className={classes.items}>
        {store.cart.map((product, index) => (
          <CartItem key={index} product={product} />
        ))}
      </div>
      <Divider />
      <div className={classes.total}>
        <Typography variant="body2">{strings.total}</Typography>
        <Typography variant="body2">{priceString(total)}</Typography>
      </div>
      <Button
        id="cart-finalize-button"
        className={classes.finish}
        color="primary"
        startIcon={<AiOutlineShopping />}
        onClick={onFinish}
        disabled={!total}
        fullWidth
        variant="contained"
      >
        {strings.finish}
      </Button>
      <ThankYouDialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <Typography variant="body1">
          {strings.youWonBack} {priceString(totalPurchase)}.
        </Typography>
      </ThankYouDialog>
    </div>
  )
}
