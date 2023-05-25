import axios from "axios";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import {
  Typography,
  TextField,
  Grid,
  Button,
  Slide,
  Snackbar,
  CircularProgress,
  Box,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: "600px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "850px",
    },
  },
  "btn-submit": {
    padding: "0.75em 2.5em",
    color: theme.palette.textWhite.main,
    marginBottom: theme.spacing(2),
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  "btn-wrapper": {
    margin: theme.spacing(1),
    position: "relative",
  },
}));

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [foundUs, setFoundUs] = useState("Google");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isFormSubmited, setIsFormSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { name, email, subject, foundUs, message };
    axios
      .post("/api/contact", data)
      .then((response) => {
        if (response.status !== 200) {
          setError(true);
        } else {
          setIsFormSubmited(true);
          setSuccess(true);
          setEmail("");
          setMessage("");
          setName("");
          setSubject("");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  };

  const classes = useStyles();
  return (
    <Box className={classes.root} style={{ minHeight: "850px" }}>
      {error && (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={error}
          autoHideDuration={6000}
          onClose={() => setError(false)}
          TransitionComponent={TransitionUp}
        >
          <Alert severity="error">Something went wrong</Alert>
        </Snackbar>
      )}
      {success && (
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ minHeight: 600 }}
        >
          <Alert severity="success">
            <Typography variant="body1" align="center" component="p">
              Thank you for getting in touch!
            </Typography>
            <Typography variant="body1" align="center">
              We'll get back to you in 1-2 business days.
            </Typography>
          </Alert>
        </Grid>
      )}
      {!isFormSubmited && (
        <Grid container component="form" spacing={4} onSubmit={handleSubmit}>
          <Grid item sm={6} xs={12}>
            <TextField
              required
              label="YOUR NAME"
              placeholder="Jack Wayley"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              required
              type="email"
              label="YOUR EMAIL ADDRESS"
              placeholder="jackwayley@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              required
              label="SUBJECT"
              placeholder="Web design"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              required
              fullWidth
              select
              margin="normal"
              label="HOW HAVE YOU FOUND US?"
              value={foundUs}
              onChange={(e) => setFoundUs(e.target.value)}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {["Google", "Facebook", "Twitter", "Friend", "Blog", "Other"].map(
                (option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                )
              )}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="How can we help you?"
              placeholder="Hi there, I would like to ..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              multiline
              fullWidth
              rows={4}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item container xs={12} justify="center">
            <div className={classes["btn-wrapper"]}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes["btn-submit"]}
                disabled={isLoading || isFormSubmited}
              >
                Submit
              </Button>
              {isLoading && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              paragraph
              color="secondary"
              align="center"
            >
              We'll get back to you in 1-2 business days.
            </Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ContactForm;
