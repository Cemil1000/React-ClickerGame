import React from "react";

import block0 from "../img/Block_Grass.png"
import block1 from "../img/Block_Wood.png"
import block2 from "../img/Block_Stone.png"
import block3 from "../img/Block_Diamond_Ore.png"
import block4 from "../img/Block_Obsidienne.png"
import block5 from "../img/Block_Netherite.png"

const arrayBlock = [block0, block1, block2, block3, block4, block5]

export const CookiesScors = (props) => {
  const { score, valueClick, totalScore, changeScores, valueCPS } = props;
  
  const effectImg =()=>{
    if (totalScore%2 == 0) {
      return(
        <div>
          <img src={block0} className="test2" />
        </div>
      )
    }else{
      return(
        <div>
          <img src={block1} className="test2" />
        </div>
      )
    }
  }

  const blockImg = ()=>{
    let valeurBlock = Math.floor(totalScore/250)
    if (valeurBlock > 5) {
      valeurBlock = 5
    }
    return(
      <img
        src={arrayBlock[valeurBlock]}
        className="block-Btn"
        onClick={() => {
          changeScores(valueClick)
        }}
      />
    )
  }

  return (
    <div className="btn-Principal">
      {blockImg()}
      <div>
      <p>Block miner: {score}</p>
      <p>Total block miner: {totalScore} </p>
      <p>block miner par seconde: {valueCPS} </p>
      </div>
      {effectImg()}
    </div>
    
  );
};
