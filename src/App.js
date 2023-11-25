
import { useEffect, useState } from 'react';
import './App.css';
import Background from "./components/background/background.jsx"
import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/hero/hero.jsx';
function App() {
  let heroData=[
    {text1:"Dive into", text2:"What you love"},
    {text1:"Indulge", text2:"your passion"},
    {text1:"Give in to", text2:"your passion"},
  ]

  const [heroCount, setHeroCount]=useState(2);{/*2 here is the heroCount variable value*/}
  const[playStatus, setPlayStatus]=useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{
        return count===2? 0: count+1

      })

    },3000)
  },[])
  return (
    <div className="App">
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      /> 
    </div>
  );
}

export default App;
