import React from 'react';
import ReactDOM from 'react-dom/client';
import Technologies from './Technologies/technologiesDescription';
import TechnologiesHeader from "./Technologies/technologiesHeader";


const technologiesHeaderDiv = ReactDOM.createRoot(document.getElementById("technologies-header"));
const technologiesDiv = ReactDOM.createRoot(document.getElementById("technologies"));

technologiesHeaderDiv.render(<TechnologiesHeader />);
technologiesDiv.render(<Technologies />);
