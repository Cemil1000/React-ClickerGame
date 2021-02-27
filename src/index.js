import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { BonusCookies } from "./component/BonusCookies";
import { useInterval } from "react-use-timeout";

import { CookiesScors } from "./component/CookiesScors";

const App = (props) => {
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [valueClick, setValueClick] = useState(1);
  const [valueAutoClick, setValueAutoClick] = useState(0);
  const [valueGrandMa, setValueGrandMa] = useState(0);
  const [isValueAutoClick, setIsValueAutoClick] = useState(false);
  const [isValueGrandMa, setIsValueGrandMa] = useState(false);
  const [priceValueClick, setPriceValueClick] = useState(10);
  const [priceAutoClick, setPriceAutoClick] = useState(50);
  const [priceGrandMa, setPriceGrandMa] = useState(500);

  const callBack = useCallback(() => {
    if (isValueAutoClick && isValueGrandMa) {
      return changeScores(valueAutoClick + valueGrandMa);
    }
    if (isValueAutoClick) {
      changeScores(valueAutoClick);
    }
    if (isValueGrandMa) {
      changeScores(valueGrandMa);
    }
  }, [score, totalScore, valueAutoClick, valueGrandMa]);

  const timeout = useInterval(callBack, 1000);
  timeout.start()

  const changeScores = (newScore)=>{
    setScore(score + newScore)
    setTotalScore(newScore + totalScore)
  }

  return (
    <div>
      <CookiesScors
        score={score}
        valueClick={valueClick}
        totalScore={totalScore}
        valueCPS={valueAutoClick + valueGrandMa}
        changeScores={(newScore) => {
          changeScores(newScore);
        }}
      />{" "}
      <BonusCookies
        valueClick={valueClick}
        setValueClick={(valueClick) => {
          setValueClick(valueClick);
        }}
        valueAutoClick={valueAutoClick}
        setValueAutoClick={(valueAutoClick) => {
          setValueAutoClick(valueAutoClick);
        }}
        valueGrandMa={valueGrandMa}
        setValueGrandMa={(valueGrandMa) => {
          setValueGrandMa(valueGrandMa);
        }}
        isValueAutoClick={isValueAutoClick}
        setIsValueAutoClick={() => {
          setIsValueAutoClick(true);
        }}
        isValueGrandMa={isValueGrandMa}
        setIsValueGrandMa={() => {
          setIsValueGrandMa(true);
        }}
        score={score}
        totalScore={totalScore}
        priceValueClick={priceValueClick}
        priceAutoClick={priceAutoClick}
        priceGrandMa={priceGrandMa}
        setScore={(param) => {
          setScore(param);
        }}
        setPriceAutoClick={(newPrice) => {
          setPriceAutoClick(newPrice);
        }}
        setPriceValueClick={(newPrice) => {
          setPriceValueClick(newPrice);
        }}
        setPriceGrandMa={(newPrice) => {
          setPriceGrandMa(newPrice);
        }}
      />{" "}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("App"));
