import React, { useState } from "react";

export default function UserInput() {
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
        [inputIdentifier]: newValue, //msut use [] so the fn understands im not adding something new. but updatinfg existing fields
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={
              (evt) => handleChange("initialInvestment", evt.target.value) //to match it with the property name in the state, theres '' otherwise js will think of it as a const or fn or hwhjatever
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(evt) =>
              handleChange("annualInvestment", evt.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(evt) => handleChange("expectedReturn", evt.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(evt) => handleChange("duration", evt.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
