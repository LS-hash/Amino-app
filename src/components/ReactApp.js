import React, { useState } from 'react';
import InfoComponent from './InfoComponent';
import QuizComponent from './QuizComponent';
import MemoryGameComponent from './MemoryGameComponent';
import Component from './Component';

const ReactApp = ({ initialComponent, components }) => {
    // This component manages which component (InfoComponent, QuizComponent, MemoryGameComponent) 
    // is currently active and should be rendered.
    const [currentComponent, setCurrentComponent] = useState(initialComponent);

    const switchComponent = (component) => {
        setCurrentComponent(component);
    };

    // This is where the currentComponent is rendered, and switchComponent is passed down to allow 
    // child components to switch the currentComponent.
    return (
        <Component>
            {currentComponent === 'InfoComponent' && <InfoComponent switchComponent={switchComponent} />}
            {currentComponent === 'QuizComponent' && <QuizComponent switchComponent={switchComponent} />}
            {currentComponent === 'MemoryGameComponent' && <MemoryGameComponent switchComponent={switchComponent} />}
        </Component>
    );
};

export default ReactApp;
