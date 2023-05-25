import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";
import Wrapper from "../components/Wrapper";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import Label from "../components/Label";

import contactData from "../data/contactData";

const useStyles = makeStyles((theme) => ({
  "section-1": {
    minHeight: "80vh",
    backgroundColor: "gray",
    backgroundImage: "url(/img/img13.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    color: theme.palette.textWhite.main,
  },
  "section-1-wrapper": {
    minHeight: "80vh",
  },
  "section-1-title": {
    fontSize: "3.5rem",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      fontSize: "4.5rem",
    },
  },
  "section-contact-info": {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(3),
  },
  "section-contact-form": {
    borderTop: "1px solid #e7eaf3;",
    paddingBottom: theme.spacing(12),
  },
  "section-contact-form-title": {
    color: theme.palette.primary.main,
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
}));

const Section = ({ children, className }) => {
  return (
    <Box component="section" className={className}>
      {children}
    </Box>
  );
};

export default function Contact() {
  const classes = useStyles();
  return (
    <>
      <Section className={classes["section-1"]}>
        <Wrapper>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes["section-1-wrapper"]}
          >
            <Typography
              variant="h1"
              component="h1"
              align="center"
              className={classes["section-1-title"]}
            >
              Got a question?
            </Typography>
            <Typography variant="body1" component="p" align="center">
              We'd love to talk about how we can help you.
            </Typography>
          </Grid>
        </Wrapper>
      </Section>

      <Section className={classes["section-contact-info"]}>
        <Wrapper>
          <Grid container>
            {contactData.map((data, i) => (
              <ContactCard
                key={data.id}
                data={data}
                borderLeft={i == 0 ? false : true}
              />
            ))}
          </Grid>
        </Wrapper>
      </Section>

      <Section className={classes["section-contact-form"]}>
        <Wrapper>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes["section-contact-form-title"]}
          >
            <Label>Leave a Message</Label>
            <Typography variant="h2" component="h2" align="center">
              Tell us about your <strong>SEO campaigns</strong>
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              align="center"
              color="secondary"
            >
              Whether you have questions or you would just like to say hello,
              contact us.
            </Typography>
          </Grid>
          <ContactForm />
        </Wrapper>
      </Section>
    </>
  );
}
