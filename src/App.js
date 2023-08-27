import React, { useState, useEffect } from "react";
import CardsSection from "./components/CardsSection";
import "./App.css";

function App() {
  const [pageno, setpageno] = useState(1);
  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${pageno}`;

  const [movieApiData, setMovieApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setMovieApiData(data); // Save only the movie results
        setIsLoading(false); // Update isLoading state after data fetch
      } catch (error) {
        console.log(error);
        setIsLoading(false); // Update isLoading state in case of an error
      }
    };

    fetchData(API_URL);
  }, [pageno]);

  const currentPage = (page) => {
    const totalPage = movieApiData.total_pages;
    let currentPage = movieApiData.page;

    switch (page) {
      case "next":
        currentPage < totalPage ? setpageno(pageno + 1) : alert("last page");
        break;
      case "prev":
        currentPage > 1 ? setpageno(pageno - 1) : setpageno(1);
    }
  };
  return (
    <div className="AppWrapper">
      <div className="header">
        <h1>Movie App</h1>
        <h2>current page: {movieApiData.page}</h2>
        <div>
          <button onClick={() => currentPage("prev")}>back</button>
          <button onClick={() => currentPage("next")}>next</button>
        </div>
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <CardsSection movieData={movieApiData} />
        // <h1>card</h1>
      )}
    </div>
  );
}

export default App;
