import React, { useEffect, useState } from "react";
import "./App.css";
import Piano from "./Piano";
function App() {
  return (
    <div className="app-container">
      <Piano />
    </div>
  );
}

export default App;



/* import React, { useEffect } from "react";
import "./App.css";
import AudioPlayer from "./core/AudioPlayer";
function App() {
  const audioPlayer = AudioPlayer();

  useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, []);

  const handleClick = () => {
    audioPlayer.playNote("C4");
  };

  return (
    <div className="app-container">
      <button onClick={handleClick}>Play</button>
    </div>
  );
}

export default App; */