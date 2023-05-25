import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette["label-background"].main,
    padding: "0.5em 1em",
    borderRadius: "5em",
    color: theme.palette.primary.main,
  },
}));

const Label = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.root}
      variant="caption"
      component="p"
      paragraph
    >
      {children}
    </Typography>
  );
};

export default Label;
