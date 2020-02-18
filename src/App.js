//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);
  let [timer, setTimer] = useState(5);
  let minutes = '00'
  let score = 'show';
  let gameOver = timer > 0 ? false : true;
  setTimeout(() => {timer > 0 ? timerActive() : timerExpired()}, 1000);

 let timerActive = () => {
    setTimer(--timer);
  if (timer < 10) setTimer('0'+timer);
  }
  let timerExpired = () => {
      let 
      idW = home > away ? '.home__score' : '.away__score',
      idL = home > away ? '.away__score' : '.home__score',
      winner = document.querySelector(idW),
      loser = document.querySelector(idL),
      tBoard = document.querySelector('.timer'),
      wCol, lCol, tCol, tText;
      if (home === away) {
        wCol = 'green';
        lCol = 'green';
        tCol = 'purple';
        tText = 'Tie!'
      } else {
        let dir = home > away ? '<--' : '-->';
        wCol = 'gold';
        lCol = 'saddlebrown';
        tCol = 'gold';
        tText = 'Winner <br>'+dir;
      }
      winner.style.color = wCol;
      loser.style.color = lCol;
      tBoard.style.color = tCol;
      tBoard.innerHTML = `${tText}`
  }
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  <div className="home__score" display={score}>{home}</div>
          </div>
          <div className="timer">{minutes}:{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score" display={score}>{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" disabled={gameOver} onClick={()=> setHome(home+7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" disabled={gameOver} onClick={()=> setHome(home+3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" disabled={gameOver} onClick={()=> setAway(away+7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" disabled={gameOver} onClick={()=> setAway(away+3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
