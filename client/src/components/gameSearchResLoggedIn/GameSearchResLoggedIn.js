import React from "react";
import { Link } from "react-router-dom";
// import { saveGame } from "../../utils/gamApi";
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

  // console.log(props);

  const addToCollection = (game) => {
    // console.log(game);
    // Get selected game (by key???)
    // Save new Game per Game model to database
    // const newGame = {};
  };

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
                  <span className="col s1 game-heading">
                    <Fab
                      size="small"
                      color="secondary"
                      aria-label="add"
                      className={classes.margin}
                      onClick={() => addToCollection(game)}
                    >
                      <AddIcon style={{ align: "right" }} />
                    </Fab>
                  </span>

                  <Typography className={classes.details}>
                    <span className="col s3 game-meta">
                      Released: {game.released}
                    </span>
                    <span className="col s2 game-meta">
                      MetaCritic: {game.metacritic}
                    </span>
                    <span className="col s2 game-meta">
                      User Rating: {game.rating}
                    </span>

                    <span className="col s3 game-heading">
                      {game.platforms.map((p) => `${p.platform.name} | `)}
                    </span>

                    <Link
                      to={{
                        pathname: `/searchDB/${game.name}`,
                        gameProps: {
                          game: game,
                        },
                      }}
                    >
                      <span className="col s1 game-heading">
                        More details...
                      </span>
                      {/* <img src={game.background_image} alt="game" /> */}
                    </Link>
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
