import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1140,
  },
}));

const Wrapper = ({ children, className }) => {
  const classes = useStyles();
  return (
    <Container className={`${classes.root} ${className || ""}`}>
      {children}
    </Container>
  );
};

export default Wrapper;
