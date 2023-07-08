import React from 'react';

// Functional component: Single amino acid representation.
const AminoAcid = ({ name, image, properties, codons, structure, chemicalProperties }) => {
    // It takes in several props representing amino acid properties and renders them.
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            {/* Render other properties here */}
        </div>
    );
};

export default AminoAcid;
