import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from "./components/MainLayout"
import Home from "./components/pages/Home"
import {AppRoutes} from "./utils/AppRoutes";

const getMainLayout = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path={AppRoutes.HOME} element={<Home/>}/>
        <Route path={AppRoutes.ANY} element={<Home/>}/>
      </Routes>
    </MainLayout>
  )
}


function App() {
  return (
    <>
      {getMainLayout()}
    </>
  );
}

export default App;
