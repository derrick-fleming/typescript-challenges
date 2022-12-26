import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.querySelector('#root') as HTMLDivElement;
const root = ReactDOM.createRoot(container);

root.render(<h1>Hello, World</h1>);
