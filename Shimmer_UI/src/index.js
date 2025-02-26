import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Body } from './components/Body';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { Login } from './components/Login';

const App = () => {
  const [lang, setLang] = useState('en')
  return (
    <div>
      <header className="text-2xl font-bold py-5 bg-black text-white text-center flex">
        Hello World
        <nav className="px-20 m-2 w-[1200px] flex justify-between text-lg">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/login">Login </a>
        </nav>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </header>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes/>}>
          <Route path="/about" element={<AboutUs lang={lang} />} />
          </Route>
          <Route path="/" element={<Body/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
