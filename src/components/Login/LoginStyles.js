import { makeStyles } from '@material-ui/core/styles';

const LoginStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(20),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        color: '#00bcd4',
        background: 'none',
        width: '100px',
        heigth: '100px'
      },
      icon: {
        color: '#00bcd4',
        background: 'none',
        fontSize: "70px",
      },
      form: {
        width: '100%',
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
}));
  
  export default LoginStyles;
