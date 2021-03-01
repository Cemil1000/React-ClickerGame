import React from "react";
import pioche2 from "../img/piocheEnchante.png";
import pioche3 from "../img/test.png";

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
  const btnValueClick =
    score >= priceValueClick ? (
      <button onClick={() => { addBonusClick(); }}> {priceValueClick} </button>
    ) : (
      <button disabled> {priceValueClick} </button>
    );
  const btnAutoClick =
    score >= priceAutoClick ? (
      <button onClick={() => { setAutoClick(); }}> {priceAutoClick} </button>
    ) : (
      <button disabled> {priceAutoClick} </button>
    );
  const btnGrandMa =
    score >= priceGrandMa ? (
      <button onClick={() => { setGrandMa(); }}> {priceGrandMa} </button>
    ) : (
      <button disabled> {priceGrandMa} </button>
    );
  
  const piochetest2 = (tkt)=>{
    if (tkt <= "5") {
      return(
        <img src={pioche3} className="bonusImg" />
      )
    }
    if(tkt <= 10){
      console.log("yes");
      return(
        <img src={pioche2} className="bonusImg" />
      )
    }
  }

  //----------Return Button----------//
  return (
    <div className="allBtn">
      {/* <p>Le chiffre dans les bouttons sont les prix</p>
      <p>À 500 de Score total vous débloquez un nouveau bonus</p> */}
      <div className="pickaxe">
        {btnValueClick}
        {piochetest2(valueClick)}
      </div>
      <div className="farmer">
        {btnAutoClick}

      </div>
      <div className="miner">
        {totalScore>=500 && btnGrandMa}

      </div>
      
      
      
    </div>
  );
};
