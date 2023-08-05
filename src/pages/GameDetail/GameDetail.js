import React, { useState, useEffect } from "react";
import axios from "axios";
import { environment } from "../../environments/environment";
import Spinner from "../../components/Spinner/Spinner";
import { useParams } from "react-router-dom";
import "./GameDetail.css";

const GameDetail = () => {
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchGameDetail = async () => {
      const options = {
        method: "GET",
        url: `${environment.apiUrl}/game?id=${id}`,
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      try {
        setIsLoading(true);
        const response = await axios.request(options);
        setGame(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error getting game details:", error);
        setIsLoading(false);
      }
    };

    fetchGameDetail();
  }, [id]);

  return (
    <div className="deep-grey-background">
      {isLoading ? (
        <Spinner />
      ) : game ? (
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-4 text-white">
              <div className="sticky-left">
                <img
                  className="rounded img-fluid mb-2"
                  src={game.thumbnail}
                  alt={game.title + "photo"}
                ></img>
                <h2>{game.title}</h2>
                <div>{game.short_description}</div>
              </div>
            </div>
            <div className="col-md-8 p-4 text-white">
              <section className="mb-3">
                <h3 className="border-bottom">About {game.title}</h3>
                <div>{game.description}</div>
              </section>
              <section className="mb-3">
                <h3 className="border-bottom">Additional Information</h3>
                <div className="row">
                  <div className="col-6 col-md-4">
                    <span className="fw-bold">Title</span>
                    <br></br>
                    {game.title}
                  </div>
                  <div className="col-6 col-md-4">
                    <span className="fw-bold">Developer</span>
                    <br></br>
                    {game.developer}
                  </div>
                  <div className="col-6 col-md-4">
                    <span className="fw-bold">Publisher</span>
                    <br></br>
                    {game.publisher}
                  </div>
                  <div className="col-6 col-md-4">
                    <span className="fw-bold">Release Date</span>
                    <br></br>
                    {game.release_date}
                  </div>
                  <div className="col-6 col-md-4">
                    <span className="fw-bold">Genre</span>
                    <br></br>
                    {game.genre}
                  </div>
                  <div className="col-6 col-md-4">
                    <span className="fw-bold">Platform</span>
                    <br></br>
                    {game.platform}
                  </div>
                </div>
              </section>
              <section className="mb-3">
                <h3 className="border-bottom">{game.title} Screenshots</h3>
                <div className="row">
                  {game.screenshots.map((screenshot) => (
                    <div key={screenshot.id} className="col-6 col-md-4 mb-3">
                      <img
                        src={screenshot.image}
                        alt={`Screenshot ${screenshot.id}`}
                        className="img-thumbnail"
                      />
                    </div>
                  ))}
                </div>
              </section>
              <section className="mb-3">
                <h3 className="border-bottom">Minimum System Requirements</h3>
                <div>
                  {game.platform === "Windows" ? (
                    <div>
                      <p>OS: {game.minimum_system_requirements.os}</p>
                      <p>
                        Processor: {game.minimum_system_requirements.processor}
                      </p>
                      <p>Memory: {game.minimum_system_requirements.memory}</p>
                      <p>
                        Graphics: {game.minimum_system_requirements.graphics}
                      </p>
                      <p>Storage: {game.minimum_system_requirements.storage}</p>
                    </div>
                  ) : (
                    <div>
                      <p>
                        {game.title} is a browser based game and should run
                        smoothly on practically any PC with an updated
                        web-browser.
                      </p>
                      <p>
                        If you have old hardware or software, you may still be
                        able to play {game.title}, but your game experience may
                        suffer. For the best gameplay experience, we recommend
                        the latest versions of Firefox, Chrome, or Internet
                        Explorer.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : (
        <div className="full-screen-content d-flex flex-column align-items-center justify-content-center deep-grey-background text-white">
          <h1>ERROR 404</h1>
          <p>Game not found with the specified ID.</p>
        </div>
      )}
    </div>
  );
};

export default GameDetail;
