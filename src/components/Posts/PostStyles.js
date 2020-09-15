import { makeStyles } from "@material-ui/core/styles";

const PostStyles = makeStyles((theme) => ({
    root: {
        
        display: 'flex',
        columnCount: '2',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        width: '500px',
        marginTop: '20px'
      },
      toolbar: {
        display: "inline-block",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(10, 10),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        width: '1200px'
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: 'red[500]',
      },
      move: {
          top: '30px',
          left: '50%'
      },
      chip: {
        marginLeft: '10px',
        marginTop: '10px',
        padding: '5px'
      },
      form: {
        width: '400px',
      },
      typo: {
        color: '#00bcd4',
        fontSize: '2rem',
        fontWeight: 'bold',
        fontFamily: 'Raleway'
      },
}));

export default PostStyles;