import { useEffect, useState } from "react";
// import { useDidUpdateEffect } from '../library/hooks' 
import "./streakTracker.css";

export default function StreakTracker() {
  let [numDays, setNumDays] = useState(1);

  function advanceStreak() {
    setNumDays((numDays) => numDays + 1);
    
  }

  return (
    <div id="streak">
      <StreakSquare streak={numDays}></StreakSquare>
      <button onClick={advanceStreak}>Advance</button>
    </div>
  );
}

function StreakSquare(props) {
  let [growTop, setGrowTop] = useState("");
  let [growRight, setGrowRight] = useState("");
  let [growLeft, setGrowLeft] = useState("");
  let [growBottom, setGrowBottom] = useState("");
  let [active, setActive] = useState("deactivated");

  const delay = 1000;

  useEffect(() => {
    start()
  }, [props.streak]);

  function start() {
    setGrowTop("animate");
    setTimeout(
        () => setGrowRight("animate"), 
        delay
      );
      setTimeout(
        () => setGrowBottom("animate"), 
        2*delay
      );
      setTimeout(
        () => setGrowLeft("animate"), 
        3*delay
      );
      setTimeout(
        () => setActive("activated"), 
        3*delay
      );
  }
  return (
    <div id="square">
      <div id="top">
        <div className={"horiz grow " + growTop}></div>
        <div className={"horiz shrink " + growTop}></div>
      </div>
      <div id="midrow">
        <div id="left">
            <div className={"vert shrink " + growLeft}></div>
          <div className={"vert grow " + growLeft}></div>
        </div>
        <div id="midsquare" className={growLeft}> 
            <p id="streak-counter" className={active}>{props.streak}</p>
        </div>
        <div id="right">
          <div className={"vert grow " + growRight}></div>
          <div className={"vert shrink " + growRight}></div>
        </div>
      </div>
      <div id="bottom">
        <div className={"horiz shrink " + growBottom}></div>
        <div className={"horiz grow " + growBottom}></div>
      </div>
    </div>
  );
}
