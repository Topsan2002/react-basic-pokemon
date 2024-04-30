// import { useState } from 'react'
// import './App.css'
import { createContext, useEffect, useState } from "react";
import backGround from "./assets/bg.jpeg"
import CenterContent from "./components/CenterContent";
import {fetchPokemonDeatil,fectAllDataPokemon} from "./api/fetchData"
import NavBar from "./components/NavBar";
import BoottomAction from "./components/BoottomAction";


export const AppContext = createContext(null);
// useState

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${backGround})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const [pekeName, setPekeName] = useState("undefined")
  const [selPeke, setSelPeke] = useState("")

  async function setSelectPoke(name){
    let data = await fetchPokemonDeatil(name)
    
    
    setSelPeke({
      label: data.name,
      value: data.name,
      height: data?.height,
      img:data?.sprites.other.showdown.front_default,
      ability:data?.abilities,
      hp:data?.stats[0].base_stat,

    })
  } 
  useEffect(() => {
    fetchData()
    setSelectPoke('bulbasaur')
    return () => {
    }
  }, [])

  const fetchData = async()=>{  
    const res = await fectAllDataPokemon()
    let data = res.map((el)=>{
      return {
        label: el.name,
        value: el.name,
        height: el?.height,
        img:el?.sprites.other.home.front_default,
        ability:el.abilities,
        hp:el?.stats[0].base_stat,

      }
    })
    setPekeName(data)
  }
// console.log(selPeke);
  return (
    <>
      <div style={backgroundImageStyle}>
        <AppContext.Provider value={{ pekeName, setSelectPoke ,selPeke}}>
          <NavBar/>
          <CenterContent/>    
          <BoottomAction name={pekeName} />
        </AppContext.Provider>
        
      </div>
    </>
  )
}

export default App