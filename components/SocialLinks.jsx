import Link from "next/link";
import { FaTwitter, FaGoogle, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    "& a": {
      marginRight: theme.spacing(2),
      color: "white",
      "&:visited": {
        color: "white",
      },
      "&:hover": {
        color: "black",
      },
    },
  },
}));

const SocialLinks = ({ className = "" }) => {
  const classes = useStyles();
  return (
    <Box className={`${classes.box} ${className}`}>
      <Link href="#">
        <a className={classes.link}>
          <Typography variant="subtitle2" component="span">
            <FaFacebookF />
          </Typography>
        </a>
      </Link>
      <Link href="#">
        <a className={classes.link}>
          <FaTwitter />
        </a>
      </Link>
      <Link href="#">
        <a className={classes.link}>
          <FaGoogle />
        </a>
      </Link>
      <Link href="#">
        <a className={classes.link}>
          <FaLinkedin />
        </a>
      </Link>
    </Box>
  );
};

export default SocialLinks;
