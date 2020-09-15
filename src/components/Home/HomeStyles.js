import { makeStyles } from "@material-ui/core/styles";

const HomeStyles = makeStyles((theme) => ({
  //General Styles
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  root: {
    display: "flex",
  },
  toolbar: {
    display: "inline-block",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(10, 10),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  //Body Styles
  logo: {
    marginTop: "-15rem",
    marginRight: "10rem",
    marginLeft: "50rem",
  },
  typo: {
    color: "#515070",
    fontSize: "1.5rem !important",
    textAlign: "justify",
    textJustify: "inter-word",
  },
  typo2: {
    color: "#515070",
    fontSize: "1.5rem !important",
    textAlign: "justify",
    textJustify: "inter-word",
    marginLeft: "8rem !important",
  },
  //Footer Styles
  footer: {
    marginTop: "5rem",
    marginBottom: "0",
  },
}));

export default HomeStyles;
