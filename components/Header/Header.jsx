import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Nav from "./Nav";
import Logo from "./Logo";
import Wrapper from "../Wrapper";

import MobileMenu from "./MobileMenu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      margin: "0",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: "0 12px",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar>
        <Wrapper className={classes.wrapper}>
          <Logo />
          <Nav />
          <MobileMenu />
        </Wrapper>
      </Toolbar>
    </AppBar>
  );
}
