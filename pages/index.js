import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Wrapper from "../components/Wrapper";
import Typography from "@material-ui/core/Typography";
import ReactTypingEffect from "react-typing-effect";
import SocialLinks from "../components/SocialLinks";
import Figure from "../components/Figure";
import Media from "../components/Media";
import Label from "../components/Label";
import Card from "../components/Card";
import Slider from "../components/Slider";

import mediaData from "../data/mediaData";
import cardData from "../data/cardData";
import { FaChevronRight } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  /* section 1 styles */
  "section-1": {
    minHeight: "100vh",
    backgroundColor: "gray",
    backgroundImage: "url(/img/img13.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    position: "relative",
  },

  "section-1-container": {
    minHeight: "100vh",
    width: "75%",
    margin: "auto",
    color: theme.palette.textWhite.main,
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  "section-1-overlay": {
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  "section-1-typing-effect": {
    color: theme.palette.primary.main,
  },
  "section-1-title": {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  "section-1-btn-link": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.textWhite.main,
    padding: "0.75rem 1rem",
    borderRadius: "6.18rem",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: "0 4px 17px rgba(0, 128, 128, 0.35)",
    },
  },
  /*section 2 styles*/
  "section-2": {
    minHeight: "100vh",
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
  },
  "section-2-header": {
    paddingBottom: theme.spacing(12),
  },
  "section-2-media-container": {
    maxWidth: "40%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },

  /* section 3 styles */
  "section-3": {
    backgroundColor: "#f8fafd",
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
  },
  "section-3-header": {
    paddingBottom: theme.spacing(12),
  },
  /* section 4 styles */
  "section-4-wrapper": {
    minHeight: "100vh",
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
  },
  "section-4-slider-container": {
    width: "100%",
    paddingBottom: theme.spacing(3),
    "& li": {
      listStyle: "none",
    },
  },
}));

const Section = ({ children, className }) => (
  <Box component="section" className={className}>
    {children}
  </Box>
);

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Section className={classes["section-1"]}>
        <Box className={classes["section-1-overlay"]}>
          <Wrapper>
            <Grid
              container
              direction="column"
              alignItems="center"
              spacing={5}
              className={classes["section-1-container"]}
            >
              <Grid item>
                <SocialLinks />
              </Grid>
              <Grid item>
                <Typography
                  variant="h1"
                  component="h1"
                  align="center"
                  className={classes["section-1-title"]}
                >
                  High-Quality Link Building Services <br />
                  For{" "}
                  <ReactTypingEffect
                    text={["Online Businesses.", "Agencies."]}
                    speed={50}
                    eraseSpeed={50}
                    eraseDelay={1500}
                    typingDelay={500}
                    className={classes["section-1-typing-effect"]}
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph align="center">
                  Our expert team uses White Hat strategies to help you scale
                  your SEO campaigns, boost agency growth and get diverse,
                  high-quality links – every single time.
                </Typography>
              </Grid>
              <Grid item>
                <Link href="#">
                  <a className={classes["section-1-btn-link"]}>
                    <Typography variant="body2" component="span">
                      Explpore Services
                    </Typography>
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Wrapper>
        </Box>
      </Section>

      <Section className={classes["section-2"]}>
        <Wrapper>
          <Box>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes["section-2-header"]}
            >
              <Grid item>
                <Label>Uprankly</Label>
              </Grid>
              <Grid item>
                <Typography variant="h2" component="h2" align="center">
                  Who is Uprankly for?
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify="space-between">
              <Grid
                item
                container
                alignItems="flex-start"
                xs={12}
                sm={6}
                className={classes["section-2-media-container"]}
              >
                {mediaData.map(({ index, title, text }) => (
                  <Media key={index} index={index} title={title} text={text} />
                ))}
                <Grid item style={{ marginBottom: "2rem" }}>
                  <Link href="#">
                    <a className={classes["section-1-btn-link"]}>
                      Get Started{" "}
                      <FaChevronRight style={{ verticalAlign: "middle" }} />
                    </a>
                  </Link>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Figure />
              </Grid>
            </Grid>
          </Box>
        </Wrapper>
      </Section>

      <Section className={classes["section-3"]}>
        <Wrapper>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes["section-3-header"]}
          >
            <Grid item>
              <Label>What sets us apart</Label>
            </Grid>
            <Grid item>
              <Typography variant="h2" component="h2" align="center">
                Why Clients Choose Uprankly
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {cardData.map(({ id, icon, title, text, color }) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <Card icon={icon} title={title} text={text} color={color} />
              </Grid>
            ))}
          </Grid>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper className={classes["section-4-wrapper"]}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes["section-3-header"]}
            spacing={2}
          >
            <Grid item>
              <Label>Testimonials</Label>
            </Grid>
            <Grid item>
              <Typography variant="h2" component="h2" align="center">
                Don't take it from us
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                component="p"
                color="secondary"
                align="center"
              >
                Here's what our customers have to say about us
              </Typography>
            </Grid>
          </Grid>
          <Box className={classes["section-4-slider-container"]}>
            <Slider />
          </Box>
          <Grid container justify="center">
            <Link href="#">
              <a
                className={classes["section-1-btn-link"]}
                style={{ borderRadius: "5px", marginTop: "3rem" }}
              >
                Read Success Stories
              </a>
            </Link>
          </Grid>
        </Wrapper>
      </Section>
    </>
  );
}
