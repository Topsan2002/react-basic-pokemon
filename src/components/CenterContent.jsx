

import {  useContext } from "react";
import { AppContext } from "../App";

export default function CenterContent() {
    const {selPeke } = useContext(AppContext);

    return (
        <div className="absolute  w-full flex bottom-64 mt-10 justify-between  ">
            <div className=" container ml-96 content-center">
                <img src={selPeke.img}   width={(selPeke.height/10)*200} />
            </div>
            <div className=" container content-end ">
                <img width={20/10*200} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/150.gif" alt="" />
            </div>
        </div>
    )
}
