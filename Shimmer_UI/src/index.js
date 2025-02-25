import React from 'react';
import ReactDOM from 'react-dom/client';
import { Body } from './components/Body';

const App = () => {
  return (
    <div>
      <h1>Hello, React with Parcel!</h1>
      <Body/>
    </div>
  );
};

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
