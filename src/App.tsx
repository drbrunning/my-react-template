/* eslint-disable linebreak-style */
import React from 'react';
import './App.css';
import AppRoutes from './routes/index';
import { Toaster } from 'react-hot-toast';
function App() {
    return (
        <div className="App">
            <main>
                <AppRoutes />
                <Toaster />
            </main>
        </div>
    );
}

export default App;
