import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '38%',
    marginLeft: '60%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ErrorFunc({error, clearError}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
          <Alert severity="error"
            onClose={() => {clearError()}}
          >{error} — Check City Name Entered!!!</Alert>
    </div>
  )
}
