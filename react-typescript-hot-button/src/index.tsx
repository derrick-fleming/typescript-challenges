import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomButtonHook from './button';


const container = document.querySelector('#root') as HTMLDivElement;
const root = ReactDOM.createRoot(container);

root.render(<CustomButtonHook />);
