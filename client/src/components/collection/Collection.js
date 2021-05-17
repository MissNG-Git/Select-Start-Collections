import React from "react";
import Sidebar from "../layout/Sidebar";
import { makeStyles, Fab } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Collection() {
  const classes = useStyles();

  // Get games database data

  // Display data on table

  return (
    <div>
      <Sidebar />
      <div style={{ height: "75vh" }} className="container">
        <div className="row">
          <div className="col s12 center-align">
            <div className="database-wrapper">
              <h2>Collection Manager</h2>
              <br />
              <table className="responsive-table highlight centered">
                <thead>
                  <tr>
                    <th>Delete Game</th>
                    <th>Photo</th>
                    <th>Title</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Platform</th>
                    <th>Purchase Price</th>
                    <th>Date Added</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <Fab
                        size="small"
                        color="secondary"
                        aria-label="remove"
                        className={classes.margin}
                        // onClick={deleteFromCollection}
                      >
                        <RemoveIcon style={{ align: "center" }} />
                      </Fab>
                    </td>
                    <td>
                      <img
                        src="https://media.rawg.io/media/games/062/062420d85c7143f72ad3557f32c41ead.jpg"
                        alt="Game cover"
                        className="game-screenshot"
                        style={{
                          width: "10vh",
                          height: "10vh",
                          padding: "5px",
                          float: "left",
                          objectFit: "cover",
                        }}
                      ></img>
                    </td>
                    <td>Destiny</td>
                    <td>2014-09-09</td>
                    <td>Shooter | Action |</td>
                    <td>
                      Xbox One | PlayStation 4 | Xbox 360 | PlayStation 3 |
                    </td>
                    <td>$59.99</td>
                    <td>2020-04-27</td>
                  </tr>
                  <tr>
                    <td>
                      <Fab
                        size="small"
                        color="secondary"
                        aria-label="remove"
                        className={classes.margin}
                        // onClick={deleteFromCollection}
                      >
                        <RemoveIcon style={{ align: "center" }} />
                      </Fab>
                    </td>
                    <td>
                      <img
                        src="https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                        alt="Game cover"
                        className="game-screenshot"
                        style={{
                          width: "10vh",
                          height: "10vh",
                          padding: "5px",
                          float: "left",
                          objectFit: "cover",
                        }}
                      ></img>
                    </td>
                    <td>Destiny 2</td>
                    <td>2017-09-06</td>
                    <td>Shooter | Massively Multiplayer | Action |</td>
                    <td>
                      PC | PlayStation 5 | Xbox One | PlayStation 4 | Xbox
                      Series S/X | Web |
                    </td>
                    <td>$59.99</td>
                    <td>2020-04-30</td>
                  </tr>
                  <tr>
                    <td>
                      <Fab
                        size="small"
                        color="secondary"
                        aria-label="remove"
                        className={classes.margin}
                        // onClick={deleteFromCollection}
                      >
                        <RemoveIcon style={{ align: "center" }} />
                      </Fab>
                    </td>
                    <td>
                      <img
                        src="https://media.rawg.io/media/games/68c/68c7bafb388dc19348bc694ae55919a5.jpg"
                        alt="Game cover"
                        className="game-screenshot"
                        style={{
                          width: "10vh",
                          height: "10vh",
                          padding: "5px",
                          float: "left",
                          objectFit: "cover",
                        }}
                      ></img>
                    </td>
                    <td>Destiny 2 Forsaken</td>
                    <td>2018-09-04</td>
                    <td>
                      Shooter | Massively Multiplayer | Adventure | Action |
                    </td>
                    <td>PC | Xbox One | PlayStation 4 |</td>
                    <td>$59.99</td>
                    <td>2020-05-05</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
