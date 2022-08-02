import './App.css';
import { useState } from 'react';
import { CoinSide, getRandomCoinSide, imgConfig } from './CoinSide'



const App = () => {
  const [coinSide, setCoinSide] = useState<CoinSide>(CoinSide.UNKNOWN)
  const [flipCount, setFlipCount] = useState<number>(0)
  const [headsCount, setHeadsCount] = useState<number>(0)
  const [tailsCount, setTailsCount] = useState<number>(0)

  const handleFlip = () => {
    setCoinSide(getRandomCoinSide());
    setFlipCount(flipCount + 1);
    coinSide === CoinSide.HEAD ? setHeadsCount(headsCount + 1) : setTailsCount(tailsCount + 1);
  }

  return (
    <>
      <div className="text-container">
        <p>Flipper app</p>
      </div>
      <div className='img-container'>
        <img onClick={handleFlip} src={imgConfig[coinSide].url} alt={imgConfig[coinSide].alt}></img>
      </div>
      <div className="text-container">
        <p>Fliped {flipCount} times</p>
        <p className="small">Heads {headsCount}, Tails {tailsCount}</p>
      </div>
    </>
  );
}

export default App;
