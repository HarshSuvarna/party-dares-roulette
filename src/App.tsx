import { useRef, useState } from "react";
import "./App.css";
import DareContainer from "./DareContainer";
import { partyDares } from "./dares";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  let repetitive: any = [];
  for (let i = 0; i < 20; i++) {
    repetitive = [...repetitive, ...partyDares];
  }

  return (
    <div className="App">
      <div className="scroll-box">
        <div className="arrow-container">
          <i className="fa-solid fa-caret-down" />
        </div>
        {(repetitive || []).map((dare: any, i: number) => (
          <DareContainer dare={dare} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
