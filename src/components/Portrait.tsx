import React from 'react';
import portrait from '../assets/portrait.png'
const Portrait: React.FC<any> = () => {

    return (
        <img src={portrait} height="auto" width="47%" style={{bottom: '0'}} />
    );
};

export default Portrait;
