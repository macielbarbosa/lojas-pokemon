export const styles = theme => ({
  root: {
    width: '100%',
  },
  search: {
    padding: '10px 20px',
    '& input': {
      marginLeft: 10,
    },
  },
  section: {
    display: 'flex',
    height: 'calc(100% - 52px)',
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
})
