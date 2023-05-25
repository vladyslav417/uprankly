import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  text: {
    padding: theme.spacing(3),
    boxShadow: "0 0 35px rgba(140, 152, 164, 0.125)",
    lineHeight: 1.5,
    marginBottom: -20,
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6),
  },
}));

const Card = ({ children, className = "" }) => {
  const classes = useStyles();
  return <Box className={`${classes.root} ${className}`}>{children}</Box>;
};

Card.text = ({ children, className }) => {
  const classes = useStyles();

  return (
    <Typography
      variant="body1"
      component="p"
      color="secondary"
      align="center"
      className={`${classes.text} ${className}`}
    >
      {children}
    </Typography>
  );
};

Card.title = ({ children, className }) => {
  return (
    <Typography variant="body1" component="h4" className={className}>
      {children}
    </Typography>
  );
};

Card.subtitle = ({ children, className }) => {
  return (
    <Typography
      variant="caption"
      component="p"
      color="secondary"
      className={className}
    >
      {children}
    </Typography>
  );
};

export default Card;
