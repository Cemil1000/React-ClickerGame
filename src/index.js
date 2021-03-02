import "./index.css";
import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { BonusClicker } from "./component/BonusClicker";
import { ClikerScors } from "./component/ClikerScors";
import { useInterval } from "react-use-timeout";

const App = (props) => {
  // Block
  const [block, setBlock] = useState(0);
  const [totalBlock, setTotalBlock] = useState(0);
  // Click + Prix bonus
  const [valueClick, setValueClick] = useState(1);
  const [priceValueClick, setPriceValueClick] = useState(10);
  // Bonus farmer auto click
  const [valueFarmer, setValueFarmer] = useState(0);
  const [isValueFarmer, setIsValueFarmer] = useState(false);
  const [priceFarmer, setPriceFarmer] = useState(50);
  // Bonus Mineur auto click
  const [valueMineur, setValueMineur] = useState(0);
  const [isValueMineur, setIsValueMineur] = useState(false);
  const [priceMineur, setPriceMineur] = useState(500);

  const callBack = useCallback(() => {
    if (isValueFarmer && isValueMineur) {
      return changeScores(valueFarmer + valueMineur);
    }
    if (isValueFarmer) {
      changeScores(valueFarmer);
    }
    if (isValueMineur) {
      changeScores(valueMineur);
    }
  }, [block, totalBlock, valueFarmer, valueMineur]);

  const timeout = useInterval(callBack, 1000);
  timeout.start()

  const changeScores = (newScore)=>{
    setBlock(block + newScore)
    setTotalBlock(newScore + totalBlock)
  }

  return (
    <div>
      <ClikerScors
        block={block}
        valueClick={valueClick}
        totalBlock={totalBlock}
        valueCPS={valueFarmer + valueMineur}
        changeScores={(newScore) => {
          changeScores(newScore);
        }}
      />{" "}
      <BonusClicker
        valueClick={valueClick}
        setValueClick={(valueClick) => {
          setValueClick(valueClick);
        }}
        valueFarmer={valueFarmer}
        setValueFarmer={(valueFarmer) => {
          setValueFarmer(valueFarmer);
        }}
        valueMineur={valueMineur}
        setValueMineur={(valueMineur) => {
          setValueMineur(valueMineur);
        }}
        isValueFarmer={isValueFarmer}
        setIsValueFarmer={() => {
          setIsValueFarmer(true);
        }}
        isValueMineur={isValueMineur}
        setIsValueMineur={() => {
          setIsValueMineur(true);
        }}
        block={block}
        totalBlock={totalBlock}
        priceValueClick={priceValueClick}
        priceFarmer={priceFarmer}
        priceMineur={priceMineur}
        setBlock={(param) => {
          setBlock(param);
        }}
        setPriceFarmer={(newPrice) => {
          setPriceFarmer(newPrice);
        }}
        setPriceValueClick={(newPrice) => {
          setPriceValueClick(newPrice);
        }}
        setPriceMineur={(newPrice) => {
          setPriceMineur(newPrice);
        }}
      />{" "}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("App"));
