import React, { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  //
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => {
      return {
        //second bracket cause objcet?
        ...prevState,
        [inputIdentifier]: +newValue, //msut use [] so the fn understands im not adding something new. but updatinfg existing fields
        //the PLUS SIGN makes auto parses it into a number from string, because the value we get from here is derived from Event Target Value which is always string
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onInputChange={handleChange} userInput={userInput} />
      <Results input={userInput} />
    </>
  );
}

export default App;
