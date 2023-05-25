import NextLink from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Wrapper from "../Wrapper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SocialLinks from "../SocialLinks";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(8),
    },
  },
  marginLeftAuto: {
    marginLeft: "auto",
  },
  bottom: {
    paddingTop: theme.spacing(12),
  },
  p: {
    fontSize: "0.875rem",
    lineHeight: 1.7,
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "1rem",
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  link: {
    display: "block",
    fontSize: "0.875rem",
    paddingTop: "0.375rem",
    paddingBottom: "0.375rem",
    color: "rgba(255, 255, 255, 0.7);",
    textDecoration: "none",
    "&:hover": {
      color: "white",
    },
  },
  copyright: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      textAlign: "left",
    },
  },
}));

const Link = ({ href, label }) => {
  const classes = useStyles();
  return (
    <NextLink href={href}>
      <a className={classes.link}>{label}</a>
    </NextLink>
  );
};

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="footer" className={classes.footer}>
      <Wrapper>
        <Grid container>
          <Grid item sm={9} lg={4}>
            <Typography variant="h3" component="h3" paragraph>
              Uprankly
            </Typography>
            <Typography variant="body2" component="p" className={classes.p}>
              We are a team of experienced professionals who have a solid sense
              of the SEO landscape – along with specialized knowledge of how
              link building works to grow your business.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} lg={2} className={classes.marginLeftAuto}>
            <Typography component="strong" className={classes.title}>
              Services
            </Typography>
            <Link href="#" label="The LinkBuild" />
            <Link href="#" label="The LinkAudit" />
            <Link href="#" label="The LinkPro" />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <Typography component="strong" className={classes.title}>
              Company
            </Typography>
            <Link href="#" label="About" />
            <Link href="#" label="Services" />
            <Link href="/contact" label="Contact" />
            <Link href="#" label="Join Us" />
          </Grid>
          <Grid item xs={6} sm={4} lg={2}>
            <Typography component="strong" className={classes.title}>
              Resources
            </Typography>
            <Link href="#" label="Blog" />
            <Link href="#" label="Privacy" />
            <Link href="#" label="Login" />
          </Grid>
        </Grid>
        <Grid container className={classes.bottom}>
          <Grid item sm={6} xs={12}>
            <SocialLinks />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography
              variant="body2"
              component="p"
              align="right"
              className={classes.copyright}
            >
              © Uprankly. 2018. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Wrapper>
    </Box>
  );
};

export default Footer;
