import React, { useState } from "react";

export default function UserInput({ onInputChange, userInput }) {
  ////input type number but the value we get from event target value is always a string
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
              (evt) => onInputChange("initialInvestment", evt.target.value) //to match it with the property name in the state, theres '' otherwise js will think of it as a const or fn or hwhjatever
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
              onInputChange("annualInvestment", evt.target.value)
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
            onChange={(evt) =>
              onInputChange("expectedReturn", evt.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(evt) => onInputChange("duration", evt.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
