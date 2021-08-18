import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'

import { useStrings } from 'strings/context'

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: 'white',
  },
}))

export const ThankYouDialog = ({ open, onClose, children }) => {
  const classes = useStyles()
  const strings = useStrings()
  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: classes.paper }}>
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
