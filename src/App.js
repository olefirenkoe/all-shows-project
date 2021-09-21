import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/layout/header/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
