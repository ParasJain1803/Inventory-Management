import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import MainLayout from "./layout/MainLayout.jsx";

function App() {
  return (
    <> 
    <MainLayout>
      <Header />
      <Outlet />
    </MainLayout>
    </>
  );
}

export default App;
