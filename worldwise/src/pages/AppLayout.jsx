import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import style from "./AppLayout.module.css";
import Map from "../components/map/Map";

const AppLayout = () => {
  return (
    <div className={style.app}>
      <Sidebar />
      <Map/>
    </div>
  );
};

export default AppLayout;
