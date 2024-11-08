import React from 'react';
import TabPanel from './components/TabPanel';
import './App.css'; // Pastikan Tailwind sudah terkonfigurasi

function App() {
    return (
        <div className="App">
            <h1 className="text-2xl font-bold text-center my-4">Tab Panel Example</h1>
            <TabPanel />
        </div>
    );
}

export default App;
