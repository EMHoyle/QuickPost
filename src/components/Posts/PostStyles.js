import { makeStyles } from "@material-ui/core/styles";

const PostStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "red[500]",
  },
  card: {
    width: "40%",
    margin: "10px",
    marginLeft: "50px",
    heigth: "100%"
  },
  container: {
    display: "flex",
    columnCount: "2",
    flexFlow: "column wrap",
    justifyContent: "center",
    marginTop: "8rem",
    width: "1000px",
    heigth: "1000px",
    marginLeft: "15rem",
  },
  chip: {
    marginLeft: "10px",
    marginTop: "10px",
    padding: "5px",
  },
  date: {
    marginLeft: '45%'
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  form: {
    width: "400px",
  },
  like: {
    color: "darkblue",
    fontFamily: "Raleway"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  move: {
    top: "30px",
    left: "50%",
  },
  postGrid: {
    columnCount: "2",
    display: "flex",
    flexFlow: "column wrap",
  },
  typo: {
    color: "#00bcd4",
    fontSize: "2rem",
    fontWeight: "bold",
    fontFamily: "Raleway",
  }
}));

export default PostStyles;
