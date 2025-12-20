import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeScreen from './routers/HomeScreen';
import AboutPersonSreen from './routers/AboutPersonScreen';
import IndicatorBranch from './routers/IndicatorBranch';

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
            {' '}
            <GlobalStyle /> <Header />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/dashboard" element={<IndicatorBranch />} />
                <Route
                    path="/about_person"
                    element={
                        <AboutPersonSreen
                            data={{
                                nome: 'Bruno',
                                sobrenome: 'Santos',
                                idade: 23,
                                endereco: 'Bairro Guarani',
                                organizacao: 'Quórum de Élderes',
                                dataDeBatismo: '2025-11-05',
                                descricao:
                                    'Especialista em TI com foco em React',
                            }}
                        />
                    }
                />
            </Routes>
        </div>
    );
}
