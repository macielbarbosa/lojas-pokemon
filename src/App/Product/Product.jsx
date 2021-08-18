import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Paper } from '@material-ui/core'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useStrings } from 'strings/context'
import { useStore } from 'App/Store/context'
import { priceString } from 'utils/functions'

const useStyles = makeStyles(() => ({
  root: {
    width: 150,
    margin: 10,
    cursor: 'pointer',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    '& img': {
      alignSelf: 'center',
    },
    padding: 10,
  },
  name: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}))

export const Product = ({ value }) => {
  const classes = useStyles()
  const strings = useStrings()
  const store = useStore()
  return (
    <Paper classes={{ root: classes.root }}>
      <div className={classes.content}>
        <img src={value.imageUrl} alt={value.name} />
        <Typography className={classes.name} variant="subtitle1">
          {value.name}
        </Typography>
        <Typography variant="h5">{priceString(value.price)}</Typography>
      </div>
      {/* <Divider /> */}
      <Button color="primary" startIcon={<AiOutlineShoppingCart />} onClick={() => store.add(value)} fullWidth>
        {strings.add}
      </Button>
      <button onClick={() => store.add(value)}>{strings.add}</button>
    </Paper>
  )
}
