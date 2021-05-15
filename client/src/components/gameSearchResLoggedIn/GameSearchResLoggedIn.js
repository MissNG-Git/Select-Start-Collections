import React from "react";
// import { Link } from "react-router-dom";
import {
  Typography,
  makeStyles,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(1),
  },
  details: {
    display: "flex",
  },
}));

export default function GameSearchResLoggedIn(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log(props);

  return (
    <div style={{ height: "75vh" }} className="search-results-div container">
      <div className="row">
        <div className="col s12 center-align">
          <div className={classes.root}>
            {props.gameSearchResults.map((game) => (
              <Accordion
                key={game.id}
                expanded={expanded === `${game.id}`}
                onChange={handleChange(`${game.id}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={game.id + "-content"}
                  id={game.id + "-header"}
                >
                  <Typography className={classes.heading}>
                    <img
                      src={game.background_image}
                      alt="Game Img"
                      style={{
                        width: "5vh",
                        height: "5vh",
                        objectFit: "cover",
                      }}
                    />
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    {game.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.details}>
                    <span className="col s4 game-meta">
                      Released: {game.released}
                    </span>
                    <span className="col s2 game-meta">
                      MetaCritic: {game.metacritic}
                    </span>
                    <span className="col s2 game-meta">
                      User Rating: {game.rating}
                    </span>

                    <span className="col s4 game-heading">
                      {game.platforms.map((p) => `${p.platform.name} | `)}
                    </span>

                    <Fab
                      size="small"
                      color="secondary"
                      aria-label="add"
                      className={classes.margin}
                    >
                      <AddIcon style={{ align: "right" }} />
                    </Fab>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* <ul className="search-results-ul">
  {props.gameSearchResults.map((game) => (
    <li key={game.id} className="search-results-li">
      <Link
        to={{
          pathname: `/collection/${game.name}`,
          gameProps: {
            game: game,
          },
        }}
      >
        <h5>{game.name}</h5>
        <img src={game.background_image} alt="game" />
      </Link>
    </li>
  ))}
</ul> */
