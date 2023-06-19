import React from "react";
import "./App.css";
import { useState } from "react";
import { data } from "./data";
import Movies from "./components/Movies";

function App() {
  const [movies, setMovies] = useState(data);

  return (
    
      <Movies movieObjects={movies} />
   
    
  );
}

export default App;
