// import React from 'react'

import HpContent from "./HpContent";
import {  useContext } from "react";
import { AppContext } from "../App";


export default function NavBar() {
    const { selPeke } = useContext(AppContext);

  return (
    <div className="container w-full flex justify-between bg-fuchsia-50/50 p-2 rounded-xl ">
    <HpContent name={selPeke.label} hp={selPeke.hp} />
    &nbsp;
    <HpContent name="Mew" hp={300}/>
    </div>
  );
}
