import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/pages/Home";
import UserDetails from "./components/pages/UserDetails";
import { AppRoutes } from "./utils/AppRoutes";

/**
 * MainLayoutRoutes component encapsulates the routing logic within the MainLayout.
 * It defines routes for the application, specifying components to be rendered for each route.
 */
const MainLayoutRoutes = () => (
  <MainLayout>
    <Routes>
      <Route path={AppRoutes.HOME} element={<Home />} />
      <Route path={AppRoutes.USER} element={<UserDetails />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </MainLayout>
);

/**
 * App component serves as the root of the application.
 * It renders the MainLayoutRoutes component, which includes all the routing logic.
 */
function App() {
  return <MainLayoutRoutes />;
}

export default App;
