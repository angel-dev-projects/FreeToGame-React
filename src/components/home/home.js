import React, { useState, useEffect } from "react";
import axios from "axios";
import { environment } from "../../environments/environment";
import "./home.css";

const Home = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      const options = {
        method: "GET",
        url: `${environment.apiUrl}/games`,
        headers: {
          "X-RapidAPI-Key":
            "f0e8709865msh09a8480c4af81a6p13c2e6jsnc243604941c4",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      try {
        setIsLoading(true);
        const response = await axios.request(options);
        setGames(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error getting the games list:", error);
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="deep-grey-background">
      <h2 className="text-center text-white py-2">All the free games</h2>
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
        <div className="row justify-content-center px-4 m-0">
          {games.map((game) => (
            <div
              className="card bg-dark mx-2 mb-3 p-0 col-lg-3 col-md-4 col-sm-6 col-12"
              key={game.id}
            >
              <img
                src={game.thumbnail}
                className="card-img-top"
                alt={game.title + "photo"}
              ></img>
              <div className="card-body text-white">
                <h5 className="card-title text-truncate">{game.title}</h5>
                <p className="card-text text-truncate">
                  {game.short_description}
                </p>
                <div className="card-text d-flex justify-content-between">
                  <a href={"/game/" + game.id} className="text-white">
                    View game
                  </a>
                  <div className="d-flex text-end justify-content-end">
                    <div className="rounded bg-secondary px-1">
                      {game.genre}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
