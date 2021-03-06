import React, { useState, useContext } from "react";
import Sidebar from "../layout/Sidebar";
import { CTX } from "./ChatStore.js";
// import TopicWindow from "../components/TopicWindow/TopicWindow";
// import ChatWindow from "../components/ChatWindow/ChatWindow";
import {
  Paper,
  Typography,
  makeStyles,
  Button,
  Chip,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

// material-ui Paper Styling
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
  },
  flex: { display: "flex", alignItems: "center" },
  topicWindow: { width: "30%", height: "300px", borderRight: "1px solid grey" },
  chatWindow: { width: "70%", height: "300px", padding: "20px" },

  chatBox: { width: "85%" },
  button: { width: "15%" },
}));

function Chat() {
  const classes = useStyles();

  // CTX Store: get allChats & trigger reducer event
  const [allChats] = useContext(CTX);
  // console.log(allChats);
  // Get list of Objects
  const topics = Object.keys(allChats);

  // Local State
  const [activeTopic, changeActiveTopic] = useState(topics[0]);
  const [textValue, changeTextValue] = useState("");

  return (
    <div>
      <Sidebar />
      <div style={{ height: "75vh" }} className="chat-wrapper container">
        <Paper className={classes.root}>
          <Typography variant="h3" component="h3">
            <p>Welcome to Chat!</p>
          </Typography>

          <Typography variant="h5" component="h5">
            {activeTopic}
          </Typography>

          <div className={classes.flex}>
            <div className={classes.topicWindow}>
              <List>
                {topics.map((topic) => (
                  <ListItem
                    onClick={(e) => changeActiveTopic(e.target.innerText)}
                    key={topic}
                    button
                  >
                    <ListItemText inset primary={topic} />
                  </ListItem>
                ))}
              </List>
            </div>

            <div className={classes.chatWindow}>
              {allChats[activeTopic].map((chat, i) => (
                <div className={classes.flex} key={i}>
                  <Chip
                    label={chat.from}
                    className={classes.chip}
                    style={{
                      margin: "0px 15px 5px 0px",
                    }}
                  />
                  <Typography variant="inherit">{chat.msg}</Typography>
                </div>
              ))}
            </div>
          </div>

          <div className={classes.flex}>
            <TextField
              label="Send a chat"
              className={classes.chatBox}
              value={textValue}
              onChange={(e) => changeTextValue(e.target.value)}
            />
            <Button variant="contained" color="primary">
              Send
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Chat;
