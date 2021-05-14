import axios from "axios";

export const saveGame = (gameData) => {
  axios
    .post("/api/games/collection", gameData)
    // .then((res) => console.log(res))
    .then((res) => console.log(res)) // Re-direct on successful register
    .catch((err) => console.log(err));
};
