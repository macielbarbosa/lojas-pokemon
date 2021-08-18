import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Dialog, DialogTitle, DialogContent, IconButton } from '@material-ui/core'

import { useStrings } from 'strings/context'
import { Clear } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  paper: {
    position: 'relative',
    backgroundColor: 'white',
    padding: '15px 15px 30px',
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
}))

export const ThankYouDialog = ({ open, onClose, children }) => {
  const classes = useStyles()
  const strings = useStrings()
  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: classes.paper }}>
      <IconButton onClick={onClose} className={classes.button}>
        <Clear fontSize="small" />
      </IconButton>
      <DialogTitle>{strings.thankYou}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

ThankYouDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
}
