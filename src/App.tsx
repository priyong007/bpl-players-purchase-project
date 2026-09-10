
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './component/Banner'
import Navbar from './component/Navbar'

import type { Iplayer } from './PlayersType/PlayersType';
import Players from './component/players/Players';

const playersFetch = async (): Promise<Iplayer[]>=> {
   const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}
function App() {
  // const playersPromise = playersFetch();
  const [playersPromise] = useState(()=> playersFetch());
  const [coin, setCoin] = useState(8000)

  return (
    <>
    
    <Navbar coin={coin}/>
    <Banner/>

    <Suspense fallback={<h2> data loading</h2>}>
      
    <Players playersPromise={playersPromise} coin={coin} setCoin ={setCoin} />
    </Suspense>

    </>
  )
}

export default App
