import React, { useState } from "react";
import AminoAcid from "./AminoAcid";

const InfoComponent = ({ switchComponent, aminoAcidData }) => {
  const [selectedAminoAcid, setSelectedAminoAcid] = useState(aminoAcidData[0]); // select first amino acid by default

  const handleInput = (input) => {
    // logic to select amino acid based on input
    setSelectedAminoAcid(input);
  };

  // InfoComponent renders an AminoAcid component with the currently selected amino acid.
  return (
    <div>
      <AminoAcid {...selectedAminoAcid} onInput={handleInput} />
      {/* Button to switch to another component */}
      <button onClick={() => switchComponent("OtherComponent")}>
        Switch to Other Component
      </button>
    </div>
  );
};

export default InfoComponent;
