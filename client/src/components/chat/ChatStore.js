import React, { createContext, useReducer } from "react";
// import io from "socket.io-client";

// Use Context Provider to hold current chats in state
export const CTX = createContext();

// initState to confirm what works in layout
const initState = {
  General: [
    { from: "Jim", msg: "hi" },
    { from: "Bob", msg: "hey" },
    { from: "Boo", msg: "yo" },
  ],
  Topic2: [
    { from: "Bob", msg: "bye" },
    { from: "Boo", msg: "later" },
    { from: "Jim", msg: "peace" },
  ],
};

// Use Reducer to control server returns and map to shape
function reducer(state, action) {
  const { from, msg, topic } = action.payload;

  switch (action.type) {
    case "RECEIVE_MESSAGE":
      // Retain existing state, while mapping over a received chat & re-rendering page
      // Retain all current messages & add new messages to topic array **see initState template**
      return {
        // "Copy" existing state
        ...state,
        // Rewrite topic key
        // Another spread to copy existing msgs & retrieve new from & msg
        [topic]: [...state[topic], { from, msg }],
      };
    default:
      return state;
  }
}

// Keep socket outside of function to prevent re-rendering on reload
// let socket;

export default function ChatStore(props) {
  // If no socket, set port
  // if (!socket) {
  //   socket = io("8000");
  // }

  // useReducer to take in reducer fxn & initState
  const reducerHook = useReducer(reducer, initState);

  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}
