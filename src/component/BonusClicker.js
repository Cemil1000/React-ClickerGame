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

export const BonusClicker = (props) => {
  const {
    // Block
    block,
    setBlock,
    totalBlock,
    // Click + prix bonus 
    valueClick,
    setValueClick,
    priceValueClick,
    setPriceValueClick,
    // Bonus farmer auto click
    valueFarmer,
    setValueFarmer,
    setIsValueFarmer,
    priceFarmer,
    setPriceFarmer,
    // Bonus Mineur auto click
    valueMineur,
    setValueMineur,
    setIsValueMineur,
    priceMineur,
    setPriceMineur
  } = props;

  //----------Function----------//
  function addBonusClick() {
    setValueClick(valueClick +1);
    setBlock(block - priceValueClick);
    setPriceValueClick(priceValueClick +1)
  }
  function setFarmer() {
    if (valueFarmer === 0) {
      setIsValueFarmer();
    }
    setValueFarmer(valueFarmer + 1);
    setBlock(block - priceFarmer);
    setPriceFarmer(priceFarmer*2)
  }
  function setMineur() {
    if (valueMineur === 0) {
      setIsValueMineur();
    }
    setValueMineur(valueMineur + 2);
    setBlock(block - priceMineur);
    setPriceMineur(priceMineur*2)
  }

  //----------All Button----------//
  const btnValueClick =()=>{
    if (block >= priceValueClick) {
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
    
  const btnFarmer =()=>{
    if (block >= priceFarmer) {
      return(
        <button className="button" onClick={() => { setFarmer(); }}>
          <span> {priceFarmer} </span>
        </button>
      )
    }
    else{
      return(
        <button className="button" style={{color: "#353535"}}>
          <span> {priceFarmer} </span>
        </button>
      )
    }
  }

  const btnMiner = ()=>{
    if (block >= priceMineur) {
      return(
        <div className="section-Btn">
          <button onClick={() => { setMineur(); }} className="button">
            <span> {priceMineur} </span>
          </button>
          <img src={miner} alt="Mineur" className="img-Btn" />
        </div>
      )
    }
    else{
      return(
        <div className="section-Btn">
          <button className="button" style={{color: "#353535"}}>
            <span disabled> {priceMineur} </span>
          </button>
          <img src={miner} alt="Mineur" className="img-Btn" />
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
      <img src={arrayPickaxe[valeurPickaxe]} alt="Pioche" className="img-Btn" />
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
        {btnFarmer()}
        <img src={farmer} alt="image de farmer" className="img-Btn" />
      </div>
      {totalBlock>=500 && btnMiner()}
    </div>
  );
};
