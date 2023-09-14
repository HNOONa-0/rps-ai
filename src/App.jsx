import { useEffect, useState } from 'react'
import { MINH, MINW} from '../my-utils/data'
import { get_models_hand, get_new_score} from '../my-utils/game'
import './App.css'
import { M0 } from '../models/M0'
import { M1 } from '../models/M1'
import { M2 } from '../models/M2'
import { M3 } from '../models/M3'
import ScoreBoard from '../components/ScoreBoard'
import RightSide from '../components/RightSide'
import LeftSide from '../components/LeftSide'
import { init_2dscore } from '../my-utils/other'
import UpSide from '../components/MiddleSide'
import refreshImg from './assets/358-3582658_reload-icon-white-reload-white-icon-png.png'
function App() {
  // dimensions of screen
  const [bodyDimension, setBodyDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // resize observer to learn dynamic body dimensions
  const [resizeObserver, setResizeObserver] = useState(
    new ResizeObserver((entries) => {
      const width = entries[0].target.offsetWidth;
      const height = entries[0].target.offsetHeight;
      setBodyDimension({ width, height });
    })
  );

  // always start counting at 0
  const[rounds,setRounds]=useState(0);
  const[playerHand,setPlayerHand]=useState(null);
  const[modelsHand,setModelsHand]=useState([null,null,null,null] );
  const[playerHands,setPlayerHands]=useState([] );

  // models array is array holding all desired models
  const[score,setScore]=useState(init_2dscore() );
  const[models,setModels]=useState([new M0(), new M1(), new M2(), new M3() ] );
  const handlePlayerHand=(curPlayerHand)=>{
    // get hands played by models
    const newModelsHand=get_models_hand(playerHands,playerHands.length,curPlayerHand,models);
    // get new score
    const newScore=get_new_score(score,curPlayerHand,newModelsHand);

    // update state
    setRounds(rounds+1);
    setPlayerHand(curPlayerHand);
    setModelsHand(newModelsHand);
    setPlayerHands([...playerHands,curPlayerHand] );
    setScore(newScore);
  }
  const reset=()=>{
    setRounds(0);
    setPlayerHand(null);
    setModelsHand([null,null,null,null] );
    setPlayerHands([] );
    setScore(init_2dscore() );
    setModels([new M0(), new M1(), new M2(), new M3() ] );
  }
  useEffect(()=>{
    // init the resize observer
    resizeObserver.observe(document.getElementById("root"));
    return () => {
      resizeObserver.disconnect();
    };
  },[] );
  return (
    <>
    <div className='flex justify-content-space-between black-background mg-bt-4px header'>
      <div className='flex justify-content-center flex-grow-1 gap-16px'>
        <h1>Round {rounds+1}</h1>
      </div>
    </div>
    <div className='flex fill-rest flex fill-rest flex-direction-column'>
      <ScoreBoard score={score} handleClick={reset}/>
      {
        bodyDimension.width<=MINW || bodyDimension.height<=MINH ?
          <UpSide models={models} handleClick={handlePlayerHand} playerHand={playerHand} modelsHand={modelsHand} />
        :
        <div className='flex justify-content-center flex-direction-row fill-rest gap-32px'>
          <LeftSide playerHand={playerHand} handleClick={handlePlayerHand}/>
          <RightSide playerHand={playerHand} modelsHand={modelsHand}/>
        </div>
      }
    </div>
    </>
  )
}
export default App