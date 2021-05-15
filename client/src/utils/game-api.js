import axios from "axios";
// const rawgApi = "https://rawg.io/api/games?search=";
// const apiKey = process.env.REACT_APP_RAWG_KEY;

export const saveGame = (gameData) => {
  axios
    .post("/api/games/collection", gameData)
    // .then((res) => console.log(res))
    .then((res) => console.log(res)) // Re-direct on successful register
    .catch((err) => console.log(err));
};
