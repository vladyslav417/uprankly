import NextLink from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  li: {
    listStyle: "none",
  },

  link: {
    textDecoration: "none",
    color: theme.palette.text.secondary,
    "&:visited": { color: "inherit" },
    "&:hover": { color: theme.palette.primary.main },
  },
  buttonLink: {
    backgroundColor: theme.palette.primary.main,
    padding: "0.75rem 1rem",
    borderRadius: "0.25rem",
    transition: "all 0.2s ease-in-out",
    "& span": {
      color: theme.palette.textWhite.main,
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: "0 4px 17px rgba(0, 128, 128, 0.35)",
    },
    "&:hover span": {
      color: theme.palette.textWhite.main,
    },
  },
}));

const Link = ({ href, label, className = "" }) => {
  const classes = useStyles();
  return (
    <Grid item component="li" className={classes.li}>
      <NextLink href={href}>
        <a className={`${classes.link} ${className}`}>
          <Typography variant="body2" component="span">
            {label}
          </Typography>
        </a>
      </NextLink>
    </Grid>
  );
};

const Nav = () => {
  const classes = useStyles();

  return (
    <Box component="nav" className={classes.root}>
      <Grid container component="ul" spacing={2}>
        <Link href="/" label="Home" />
        <Link href="/" label="About" />
        <Link href="/" label="Services" />
        <Link href="/" label="Success Stories" />
        <Link href="/" label="Blog" />
        <Link href="/contact" label="Contact" className={classes.buttonLink} />
      </Grid>
    </Box>
  );
};

export default Nav;
