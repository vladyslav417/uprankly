import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  text: {
    lineHeight: 2,
  },
});

const Card = ({ icon, title, text, color }) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h2" component="span" style={{ color: color }}>
        {icon}
      </Typography>
      <Typography variant="h5" component="h3" paragraph>
        {title}
      </Typography>
      <Typography
        variant="body1"
        component="p"
        color="secondary"
        className={classes.text}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Card;
