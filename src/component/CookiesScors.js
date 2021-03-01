import React from "react";


export const CookiesScors = (props) => {
  const { score, valueClick, totalScore, changeScores, valueCPS } = props;
  return (
    <div className="allBtn2">
      <img
        src="https://www.ptitchef.com/imgupl/recipe/donuts-a-l-americaine--md-452758p701166.jpg"
        className="cookie-btn"
        onClick={() => {
          changeScores(valueClick);
        }}
      />
      <div>
      <p>Score: {score}</p>
      <p>Total score: {totalScore} </p>
      <p>Click par seconde: {valueCPS} </p>
      </div>
    </div>
  );
};
