import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core/'

import { Page } from 'App/common/Page'
import { useStrings } from 'strings/context'
import { useHistory } from 'react-router'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > :first-child': {
      width: 200,
    },
  },
}))

export const StoreSelector = () => {
  const classes = useStyles()
  const strings = useStrings()
  const history = useHistory()
  return (
    <Page>
      <div className={classes.root}>
        <Paper>
          <List component="nav" subheader={<ListSubheader component="div">{strings.selectStore}</ListSubheader>}>
            <ListItem button onClick={() => history.push('/agua')}>
              <ListItemText primary={strings.water} />
            </ListItem>
            <ListItem button onClick={() => history.push('/fogo')}>
              <ListItemText primary={strings.fire} />
            </ListItem>
            <ListItem button onClick={() => history.push('/dragao')}>
              <ListItemText primary={strings.dragon} />
            </ListItem>
          </List>
        </Paper>
      </div>
    </Page>
  )
}
