import React from "react"
import BoxCard from "./BoxCard.js";
import './App.css';

function App() {
  return (
    <div className="BoxApp">
      <BoxCard
      title="Title 1"
      subtitle="Subtitle 1"
      description="Hello world 1"
      bgcolor="#ff0001"
      width="250px"
     
      />
       <BoxCard
      title="Title 2"
      subtitle="Subtitle 2"
      description="Hello world 2"
      bgcolor="#ffa500"
      width="250px"
      />
       <BoxCard
      title="Title 3"
      subtitle="Subtitle 3"
      description="Hello world 3"
      bgcolor="#fffe01"
      width="250px"
      />
       <BoxCard
      title="Title 4"
      subtitle="Subtitle 4"
      description="Hello world 4"
      bgcolor="#008000"
      width="250px"
      />

    
    </div>
  );
}

export default App;
