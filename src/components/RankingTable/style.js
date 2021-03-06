/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    marginRight: 15,
  },
  input: {
    '&::placeholder': {
      color: 'white',
      fontSize: 14,
      textOverflow: 'ellipsis !important',
    },
  },
  textField: {
    color: 'white',
  },
  button: {
    backgroundColor: theme.palette.gray.silver,
    marginRight: 2,
    textTransform: 'none',
  },

}));
