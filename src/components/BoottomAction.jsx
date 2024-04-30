// import React from 'react'

import {  Select } from "antd";
import SkillItem from "./SkillItem";
import { useContext } from "react";
import { AppContext } from "../App";



export default function BoottomAction() {

    const { pekeName, setSelectPoke,selPeke } = useContext(AppContext);

    console.log(selPeke);

    const handleChange = (value) => {
        // console.log(`selected ${value}`);
        setSelectPoke(value)
      };
    
    return (
        <div className="absolute bottom-2  container w-full  mt-20 grid grid-cols-6  bg-fuchsia-50  border-4 border-blue-400 rounded-lg min-h-48">

            <div className="w-full h-ful  p-1 col-span-2 border-r-4 border-blue-400" >
                <div>
                <div className="text-xl mb-1 font-bold" >
                    Select Pokemon :
                </div>
                <Select
                    showSearch
                    style={{
                    width: '100%',
                    }}
                    // value={options.name}
                    placeholder="select one country"
                    defaultValue={['bulbasaur']}
                    onChange={handleChange}
                    options={pekeName}
                    optionRender={(option) => (

                        <div className="  p-2 rounded-lg border-2  border-gray-400">
                            <div className="text-xl">
                            {option.label} 
                            </div>
                                <img src={option.data.img} width={100} alt="" />
                        </div>
                    )}
                />

                </div>
            </div>
            <div className="w-full h-ful  col-span-4 p-1" >
                <div className="text-xl mb-1 font-bold" >
                    Select Skill :
                </div>
                <div className="flex flex-wrap gap-2 justify-center pb-4 ">
                    {
                      (selPeke ?
                        selPeke.ability.map((e)=>{
                             // eslint-disable-next-line react/jsx-key
                             return <SkillItem name={e.ability.name}/>
                        })
                      
                        : <></> )   
                    }
                   
                   
                </div>

            </div>
         
        </div>
    )
}
