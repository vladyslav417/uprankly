import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    display: "inline-block",
    width: "25px",
    height: "15.5px",
    position: "relative",
    marginLeft: "auto",
    transform: "rotate(0deg)",
    transition: ".5s ease-out",
    cursor: "pointer",
    "& span": {
      display: "block",
      position: "absolute",
      height: "2.5px",
      width: "100%",
      background: "#8c98a4",
      borderRadius: "4px",
      opacity: 1,
      left: 0,
      transform: "rotate(0deg)",
      transition: ".25s ease-in-out",
    },
    "& span:nth-child(1)": {
      top: "0px",
    },
    "& span:nth-child(2)": {
      top: 7,
    },
    "& span:nth-child(3)": {
      top: 14,
    },
  },
  open: {
    "& span": {
      backgroundColor: "#377dff",
    },
    "& span:nth-child(1)": {
      top: 7,

      transform: "rotate(135deg)",
    },
    "& span:nth-child(2)": {
      opacity: 0,
      left: -20,
    },
    "& span:nth-child(3)": {
      top: 7,
      transform: "rotate(-135deg)",
    },
  },
}));

const ButtonMenu = ({ onClick, isOpen }) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.root} ${isOpen ? classes.open : ""}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default ButtonMenu;
