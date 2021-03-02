import React, { useState } from "react";

import block0 from "../img/Block_Grass.png"
import block1 from "../img/Block_Wood.png"
import block2 from "../img/Block_Stone.png"
import block3 from "../img/Block_Diamond_Ore.png"
import block4 from "../img/Block_Obsidienne.png"
import block5 from "../img/Block_Netherite.png"

const arrayBlock = [block0, block1, block2, block3, block4, block5]

export const ClikerScors = (props) => {
  const { block, valueClick, totalBlock, changeScores, valueCPS } = props;

  const [classImgEffect, setClassImgEffect] =useState("")
  const [nbrClick,setNbrClick]= useState(0)
  const imgEffect =
    nbrClick%2 === 0 ?(
      <img src={block0} alt="Effet de particule" className={"block-Impaire " + classImgEffect} />
    ):(
      <img src={block1} alt="Effet de particule" className={"block-Paire " + classImgEffect} />
    )

  const clickCube = ()=>{
    changeScores(valueClick)
    setTimeout(()=>{setClassImgEffect("")},300)
    setClassImgEffect("effect-img")
    setNbrClick(nbrClick + 1)
  }

  const blockImg = ()=>{
    let valeurBlock = Math.floor(totalBlock/250)
    if (valeurBlock > 5) {
      valeurBlock = 5
    }
    return(
      <img
        src={arrayBlock[valeurBlock]}
        className="block-Btn"
        alt="Block principal"
        onClick={() => {
          clickCube()
        }}
      />
    )
  }

  return (
    <div className="btn-Principal">
      {blockImg()}
      <div>
      <p className="info-Score">Block miner: {block}</p>
      <p className="info-Score">Total block miner: {totalBlock} </p>
      <p className="info-Score">block miner par seconde: {valueCPS} </p>
      {imgEffect}
      </div>
    </div>
    
  );
};
