import React, { createContext, useReducer } from "react";

// Use Context Provider to hold current chats in state
export const CTX = createContext();

// initState to confirm what works in layout
const initState = {
  general: [
    { from: "test", msg: "hi" },
    { from: "user", msg: "hey" },
    { from: "bob", msg: "yo" },
  ],
  topic2: [
    { from: "bob", msg: "bye" },
    { from: "user", msg: "later" },
    { from: "test", msg: "peace" },
  ],
};

// Use Reducer to control server returns and map to shape
function reducer(state, action) {
  const { from, msg, topic } = action.payload;

  switch (action.type) {
    case "RECEIVE_MESSAGE":
      // retain existing state, while mapping over a received chat & re-rendering page
      // retain all current messages & add new messages to topic array **see initState template**
      return {
        // "copy" existing state
        ...state,
        // rewrite topic key
        // another spread to copy existing msgs & retrieve new from & msg
        [topic]: [...state[topic], { from, msg }],
      };
    default:
      return state;
  }
}

export default function ChatStore(props) {
  // if no socket, set port
  // if (!socket) {
  //   socket = io("8080");
  // }

  // useReducer to take in reducer fxn & initState
  const reducerHook = useReducer(reducer, initState);

  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}
