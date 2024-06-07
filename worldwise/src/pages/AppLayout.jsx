import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import style from "./AppLayout.module.css";
import Map from "../components/map/Map";
import User from "../components/User"

const AppLayout = () => {
  return (
    <div className={style.app}>
      <Sidebar />
      <Map/>
      <User/>
    </div>
  );
};

export default AppLayout;
