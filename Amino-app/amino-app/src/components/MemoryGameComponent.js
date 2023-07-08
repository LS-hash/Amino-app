import React, { useState } from "react";
import Component from "./Component";

// Functional component: Memory game
const MemoryGameComponent = ({ switchComponent, children }) => {
  // Here are states for the current game strategy, the current question, and the current score.
  const [strategy, setStrategy] = useState(null);
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);

  // This function will handle input from the user.
  const handleInput = (input) => {
    // logic to handle input
  };

  // The component renders its child components (cards, answers, ect.)
  return (
    <div>
      {/* Render children components */}
      {children}
      {/* Button to switch to another component */}
      <button onClick={() => switchComponent("OtherComponent")}>
        Switch to Other Component
      </button>
    </div>
  );
};

export default MemoryGameComponent;
