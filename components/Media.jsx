import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "2rem",
  },
  avatar: {
    width: 30,
    height: 30,
    color: theme.palette.primary.main,
    backgroundColor: "rgba(55, 125, 255, 0.1)",
  },
  title: {
    color: theme.palette.primary.main,
  },
  text: {
    lineHeight: 2,
  },
}));

const Media = ({ index, title, text }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      spacing={2}
      wrap="nowrap"
      xs={12}
      className={classes.root}
    >
      <Grid item xs="auto">
        <Avatar className={classes.avatar}>
          <Typography variant="subtitle2">{index}</Typography>
        </Avatar>
      </Grid>
      <Grid item container>
        <Grid item xs={12}>
          <Typography variant="h5" component="h3" className={classes.title}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            component="p"
            color="secondary"
            className={classes.text}
          >
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Media;
