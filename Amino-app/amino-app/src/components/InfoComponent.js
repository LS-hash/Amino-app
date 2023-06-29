import React, { useState } from 'react';
import AminoAcid from './AminoAcid';

// Functional component: info panel for displaying information about amino acids.
const InfoComponent = ({ aminoAcidData }) => {
    // The useState hook manages the state of the currently selected amino acid.
    const [selectedAminoAcid, setSelectedAminoAcid] = useState(aminoAcidData[0]);  // select first amino acid by default

    // handleInput handles input from the user and uses it to set the selected amino acid.
    const handleInput = (input) => {
        // logic to select amino acid based on input
        setSelectedAminoAcid(input);
    };

    // InfoComponent renders an AminoAcid component with the currently selected amino acid.
    return (
        <div>
            <AminoAcid {...selectedAminoAcid} onInput={handleInput} />
        </div>
    );
};

export default InfoComponent;
