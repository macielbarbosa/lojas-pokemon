import { withStrings } from 'strings/context'
import { withStyles } from '@material-ui/core'
import { compose } from 'redux'

import { StoreComponent } from './Store'
import { styles } from './styles'

export const Store = compose(withStyles(styles), withStrings)(StoreComponent)
