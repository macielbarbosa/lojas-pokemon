import React from 'react'

import { withContext } from 'utils/withContext'

export const StoreContext = React.createContext()
StoreContext.displayName = 'StoreContext'
export const withStore = withContext(StoreContext, 'store')
export const useStore = () => React.useContext(StoreContext)
