import axios from "axios";
// const rawgApi = "https://rawg.io/api/games?search=";
// const apiKey = process.env.REACT_APP_RAWG_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getGame: () => {
    axios.get("api/games/browse").then((res) => {
      console.log(res);
    });
  },
  saveGame: (gameData) => {
    axios
      .post("/api/games/searchDB", gameData)
      .then((res) => console.log("saveGame", res))
      .catch((err) => console.log(err));
  },
};
