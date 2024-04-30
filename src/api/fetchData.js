import axios from "axios"



 export async function fetchPokemonDeatil(pokeName){
    try {
        // let getname = await fetchPokemonName( )
        
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        // console.log(response);
        let res = await response;
        return  res?.data
      } catch (error) {
        console.error(error);
      }
}

export async function fetchPokemonName(){
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`);
    
        let res = await response
        // console.log(res.data.results);
        return   res?.data.results
      } catch (error) {
        console.error(error);
      }
}


export async function fectAllDataPokemon(){
    try {
        let getname = await fetchPokemonName()
        let arr = []
        for (let i = 0; i < getname.length; i++) {
            let my =  await fetchPokemonDeatil(getname[i].name)
            arr.push(my)
        }
     
        return  arr;
      } catch (error) {
        console.error(error);
      }
}

export async function getSkillDetail(url){
    try {
        // let getname = await fetchPokemonName( )
        
        const response = await axios.get(`${url}`);
        let res = await response;
        return  res?.data
      } catch (error) {
        console.error(error);
      }
}

// module.exports={fetchPokemonDeatil, fetchPokemonName}
// export  [fetchPokemonDeatil,fetchPokemonName]
// module.exports={}
// export default [fetchPokemonDeatil,fetchPokemonName]

