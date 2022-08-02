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
        <input type="image" onClick={handleFlip} src={imgConfig[coinSide].url} alt={imgConfig[coinSide].alt} />
      </div>
      <div className="text-container">
        <p>Fliped {flipCount} times</p>
        {flipCount ? (
          <p className="small">Heads {headsCount} ({(headsCount / flipCount * 100).toFixed(2)}%), Tails {tailsCount} ({(tailsCount / flipCount * 100).toFixed(2)}%)</p>
        ) : null}
      </div>
    </>
  );
}

export default App;
