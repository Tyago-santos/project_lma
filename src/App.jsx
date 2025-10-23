import React from "react";
import { Route,  Routes } from "react-router-dom";

import HomeScreen from './routers/HomeScreen';
import LoginScreen from './routers/LoginScreen';
import PersonScreen from './routers/PersonScreen';


import { GlobalStyle } from "./GlobaStyle";
import Header from './components/Header'

export default function App (){


  return(

    <div>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/person" element={ <PersonScreen/>} />
      </Routes>

    </div>

  );
}