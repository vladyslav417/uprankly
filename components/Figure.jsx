import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  uFillPrimary: {
    fill: theme.palette.primary.main,
  },
  uFillDanger: {
    fill: theme.palette.error.main,
  },
  uFillSuccess: {
    fill: theme.palette.success.main,
  },
  uFillWarning: {
    fill: theme.palette.warning.main,
  },
}));

const Figure = () => {
  const classes = useStyles();
  return (
    <figure>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 614.8 747.7"
        style={{ enableBackground: "new 0 0 614.8 747.7" }}
        xmlSpace="preserve"
      >
        <path
          className={classes.uFillPrimary}
          opacity=".05"
          d="M186.9,138.9C125.8,144.5,69.7,176,34.4,226c-54.3,76.8-67.1,204.7,193.8,371.7c411.5,263.5,387.9,6,382.7-30.6
          c-0.5-3.6-0.9-7.2-1.3-10.7l-22.1-241.9C576.8,198.3,474,112.7,357.7,123.3L186.9,138.9z"
        ></path>
        <g>
          <defs>
            <path
              id="mockupExample1_1"
              d="M168.6,729.7L168.6,729.7c135.8,53,290.2-14.8,343.2-150.6l85-217.9C649.8,225.4,582,71,446.2,18l0,0
              C310.4-34.9,156,32.8,103,168.6L18,386.5C-34.9,522.3,32.8,676.7,168.6,729.7z"
            ></path>
          </defs>
          <clipPath id="mockupExample1_2">
            <use
              xlinkHref="#mockupExample1_1"
              style={{ overflow: "visible" }}
            ></use>
          </clipPath>
          <g style={{ clipPath: "url(#mockupExample1_2)" }}>
            <image
              style={{ overflow: "visible" }}
              width="615"
              height="750"
              xlinkHref="img/img1.jpg"
              transform="matrix(1 0 0 1 -0.1366 -0.9532)"
            ></image>
          </g>
        </g>
        <circle
          className={classes.uFillDanger}
          cx="126.3"
          cy="693.8"
          r="16.3"
        ></circle>
        <circle
          className={classes.uFillSuccess}
          cx="132.9"
          cy="632.6"
          r="10.6"
        ></circle>
        <circle
          className={classes.uFillPrimary}
          cx="77"
          cy="655.9"
          r="21.6"
        ></circle>
        <circle
          className={classes.uFillWarning}
          cx="38.8"
          cy="708.1"
          r="3.9"
        ></circle>
      </svg>
    </figure>
  );
};

export default Figure;
