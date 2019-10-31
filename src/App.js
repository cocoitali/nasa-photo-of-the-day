import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("Hello from the effect hook!");
  });
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p>
    </div>
  );
}

export default App;
