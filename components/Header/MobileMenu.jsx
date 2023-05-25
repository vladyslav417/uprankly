import { useState } from "react";
import NextLink from "next/link";
import { Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

import { MdExpandMore } from "react-icons/md";
import ButtonMenu from "./ButtonMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "100%",
    zIndex: 1000,
    background: "white",
    transition: "all 0.2s ease-in-out",
    transformOrigin: "top",
    paddingTop: theme.spacing(1),
  },

  link: {
    display: "block",
    textDecoration: "none",
    color: theme.palette.text.secondary,
    padding: "0.5rem 1rem 0",
    marginBottom: "0.6rem",
    "&:visited": { color: "inherit" },
    "&:hover": { color: theme.palette.primary.main },
  },
  select: {
    borderLeft: "solid thick #377dff",
  },
}));

const Link = ({ href, label, style, closeMenu }) => {
  const classes = useStyles();
  return (
    <NextLink href={href}>
      <a className={classes.link} style={style} onClick={closeMenu}>
        <Typography variant="body2" component="span">
          {label}
        </Typography>
      </a>
    </NextLink>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceExpended, setIsServiceExpended] = useState(false);
  const classes = useStyles();
  const closeMenu = () => setIsOpen(false);
  return (
    <>
      <ButtonMenu isOpen={isOpen} onClick={() => setIsOpen((c) => !c)} />
      <Grid
        container
        component="nav"
        className={classes.root}
        style={{ transform: isOpen ? "scale(1,1)" : "scale(1,0)" }}
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <Link href="/" label="Home" closeMenu={closeMenu} />
        </Grid>
        <Grid item xs={12}>
          <Link
            href="#"
            label="About"
            style={{ marginBottom: "0.4rem" }}
            closeMenu={closeMenu}
          />
        </Grid>
        <Grid item xs={12}>
          <Accordion
            elevation={0}
            onChange={(_, expended) => {
              setIsServiceExpended(expended);
            }}
          >
            <AccordionSummary
              style={{
                margin: 0,
                color: isServiceExpended ? "#377dff" : "inherit",
              }}
              expandIcon={
                <MdExpandMore
                  style={{
                    color: isServiceExpended ? "#377dff" : "inherit",
                  }}
                />
              }
            >
              <Typography variant="body2" component="span">
                Services
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container className={classes.select}>
                <Grid item xs={12}>
                  <Link href="#" label="Link Building" closeMenu={closeMenu} />
                </Grid>
                <Grid item xs={12}>
                  <Link href="#" label="Link Audit" closeMenu={closeMenu} />
                </Grid>
                <Grid item xs={12}>
                  <Link
                    href="#"
                    label="Remote Link Builder"
                    closeMenu={closeMenu}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Grid item xs={12}>
            <Link href="#" label="Success Stories" closeMenu={closeMenu} />
          </Grid>
          <Grid item xs={12}>
            <Link href="#" label="Blog" closeMenu={closeMenu} />
          </Grid>
          <Grid item xs={12}>
            <Link href="/contact" label="Contact" closeMenu={closeMenu} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MobileMenu;
