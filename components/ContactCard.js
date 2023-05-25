import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    borderLeft: "1px solid #e7eaf3",
    [theme.breakpoints.down("sm")]: {
      borderLeft: "none",
    },
  },
  avatar: {
    color: theme.palette.primary.main,
    backgroundColor: "rgba(55, 125, 255, 0.1)",
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: theme.spacing(2),
  },
}));

const ContactCard = ({ data, borderLeft }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      justify="center"
      xs={12}
      sm={6}
      lg={3}
      className={borderLeft ? classes.card : ""}
      style={{ marginBottom: "3rem" }}
    >
      <Grid item align="center" xs={12}>
        <Avatar className={classes.avatar}>
          <Typography variant="h5" component="p">
            {data.icon}
          </Typography>
        </Avatar>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          {data.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" color="secondary" align="center">
          {data.subtitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ContactCard;
