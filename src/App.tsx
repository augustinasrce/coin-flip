import './App.css';
import { useEffect, useState } from 'react';
import { CoinSide, getCoinSideByValue, images } from './CoinSide'



const App = () => {
  const [coinSide, setCoinSide] = useState<CoinSide>(CoinSide.UNKNOWN)
  const [flipCount, setFlipCount] = useState<number>(0)
  const [headsCount, setHeadsCount] = useState<number>(0)
  const [tailsCount, setTailsCount] = useState<number>(0)

  useEffect(() => {
    if (coinSide === CoinSide.HEAD) {
      setFlipCount(flipCount + 1);
      setHeadsCount(headsCount + 1);
    }
    if (coinSide === CoinSide.TAIL) {
      setFlipCount(flipCount + 1);
      setTailsCount(tailsCount + 1);
    }
  }, [coinSide])

  const handleFlip = () => {
    setCoinSide(getCoinSideByValue(Math.round(Math.random())));
  }

  return (
    <>
      <div className="text-container">
        <p>Flipper app</p>
      </div>
      <div className='img-container'>
        <img onClick={handleFlip} src={images[coinSide].url} alt={images[coinSide].alt}></img>
      </div>
      <div className="text-container">
        <p>Fliped {flipCount} times</p>
        <p className="small">Heads {headsCount}, Tails {tailsCount}</p>
      </div>
    </>
  );
}

export default App;
