import React from "react";

import farmer from "../img/farmer2.png"
import miner from "../img/mineur2.png"

import pickaxe0 from "../img/Pickaxe_Wooden.png"
import pickaxe1 from "../img/Pickaxe_Stone.png"
import pickaxe2 from "../img/Pickaxe_Iron.png"
import pickaxe3 from "../img/Pickaxe_Golden.png"
import pickaxe4 from "../img/Pickaxe_Diamond.png"
import pickaxe5 from "../img/Pickaxe_Netherite.png"

const arrayPickaxe = [pickaxe0,pickaxe1,pickaxe2,pickaxe3,pickaxe4,pickaxe5]

export const BonusCookies = (props) => {
  const {
    score,
    setScore,
    totalScore,
    // click + prix bonus 
    valueClick,
    setValueClick,
    priceValueClick,
    setPriceValueClick,
    // Premier Bonus auto click
    valueAutoClick,
    setValueAutoClick,
    setIsValueAutoClick,
    priceAutoClick,
    setPriceAutoClick,
    // Deuxième Bonus auto click
    valueGrandMa,
    setValueGrandMa,
    setIsValueGrandMa,
    priceGrandMa,
    setPriceGrandMa
  } = props;

  //----------Function----------//
  function addBonusClick() {
    setValueClick(valueClick +1);
    setScore(score - priceValueClick);
    setPriceValueClick(priceValueClick +1)
  }
  function setAutoClick() {
    if (valueAutoClick === 0) {
      setIsValueAutoClick();
    }
    setValueAutoClick(valueAutoClick + 1);
    setScore(score - priceAutoClick);
    setPriceAutoClick(priceAutoClick*2)
  }
  function setGrandMa() {
    if (valueGrandMa === 0) {
      setIsValueGrandMa();
    }
    setValueGrandMa(valueGrandMa + 2);
    setScore(score - priceGrandMa);
    setPriceGrandMa(priceGrandMa*2)
  }

  //----------All Button----------//
  const btnValueClick =()=>{
    if (score >= priceValueClick) {
      return(
        <button className="button" onClick={() => { addBonusClick(); }}>
          <span> {priceValueClick} </span>
        </button>
      )
    }
    else{
      return(
        <button className="button" style={{color: "#353535"}}>
          <span> {priceValueClick} </span>
        </button>
      )
    }
  }
    
  const btnAutoClick =()=>{
    if (score >= priceAutoClick) {
      return(
        <button className="button" onClick={() => { setAutoClick(); }}>
          <span> {priceAutoClick} </span>
        </button>
      )
    }
    else{
      return(
        <button className="button" style={{color: "#353535"}}>
          <span> {priceAutoClick} </span>
        </button>
      )
    }
  }

  const btnMiner = ()=>{
    if (score >= priceGrandMa) {
      return(
        <div className="section-Btn">
          <button onClick={() => { setGrandMa(); }} className="button">
            <span> {priceGrandMa} </span>
          </button>
          <img src={miner} className="img-Btn" />
        </div>
      )
    }
    else{
      return(
        <div className="section-Btn">
          <button className="button" style={{color: "#353535"}}>
            <span disabled> {priceGrandMa} </span>
          </button>
          <img src={miner} className="img-Btn" />
        </div>
      )
    }
  }
  
  const pickaxeImg = ()=>{
    let valeurPickaxe = Math.floor(valueClick/5)
    if (valeurPickaxe > 5) {
      valeurPickaxe = 5
    }
    return(
      <img src={arrayPickaxe[valeurPickaxe]} className="img-Btn" />
    )
  }

  //----------Return Button----------//
  return (
    <div className="all-Btn">
      <div className="section-Btn">
        {btnValueClick()}
        {pickaxeImg()}
      </div>
      <div className="section-Btn">
        {btnAutoClick()}
        <img src={farmer} className="img-Btn" />
      </div>
      {totalScore>=500 && btnMiner()}
    </div>
  );
};
