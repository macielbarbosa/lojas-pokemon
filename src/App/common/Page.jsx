import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { MenuItem, Select } from '@material-ui/core'

import { useSetStrings, useStrings } from 'strings/context'
import { enumLanguage } from 'strings/enumLanguage'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  select: {
    position: 'absolute',
    right: 8,
    top: 0,
  },
  content: {
    position: 'relative',
    maxWidth: 1038,
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 0',
    boxSizing: 'border-box',
    width: '100%',
    height: '100vh',
    [theme.breakpoints.down('xs')]: {
      padding: '40px 0 0',
    },
  },
}))

export const Page = ({ children }) => {
  const classes = useStyles()
  const strings = useStrings()
  const setStrings = useSetStrings()
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Select className={classes.select} value={strings.language} onChange={event => setStrings(event.target.value)}>
          <MenuItem value={enumLanguage.portuguese}>{enumLanguage.portuguese}</MenuItem>
          <MenuItem value={enumLanguage.english}>{enumLanguage.english}</MenuItem>
        </Select>
        {children}
      </div>
    </div>
  )
}
