import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeScreen from './routers/HomeScreen';

import { GlobalStyle } from './GlobaStyle';
import Header from './components/Header';
import LoadingSpinner from './components/Loading';

export default function App() {
    const [showLoading, setShowLoding] = useState(true);

    setTimeout(() => {
        setShowLoding(false);
    }, 1000);

    return showLoading ? (
        <LoadingSpinner />
    ) : (
        <div>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
            </Routes>
        </div>
    );
}
