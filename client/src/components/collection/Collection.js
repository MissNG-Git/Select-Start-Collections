import React from "react";
import Sidebar from "../layout/Sidebar";
// import GameSearchResLoggedIn from "../gameSearchResLoggedIn/GameSearchResLoggedIn";

export default function Collection() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [gameSearchResults, setGameSearchResults] = useState([]);
  // const gameSearchAPI = "https://rawg.io/api/games?search=";
  // const apiKey = "key=ecb17b4d180847d69d89a8bccf741a5d";

  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   let slug = searchTerm.split(" ").join("-").toLowerCase();

  //   setGameSearchResults([]);
  //   fetch(`${gameSearchAPI}${slug}&${apiKey}`)
  //     .then((res) => res.json(console.log(res)))
  //     .then(({ results }) => {
  //       results === undefined
  //         ? alert("no games found")
  //         : setGameSearchResults(results);
  //     });
  //   setSearchTerm("");
  // };

  return (
    <div>
      <Sidebar />
      <div style={{ height: "75vh" }} className="container">
        <div className="row">
          <div className="col s12 center-align">
            <div className="database-wrapper">
              <h2>Collection Manager</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
