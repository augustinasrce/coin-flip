import tails from './assets/tails.png'
import heads from './assets/heads.png'
import unknown from './assets/repeat.svg'

export enum CoinSide {
    HEAD,
    TAIL,
    UNKNOWN
}

export const getCoinSideByValue = (key: number): CoinSide => {
    return key === 0 ? CoinSide.HEAD : (key === 1 ? CoinSide.TAIL : CoinSide.UNKNOWN);
}

export const images = {
    0: {url: heads, alt: 'Heads'},
    1: {url: tails, alt: 'Tails'},
    2: {url: unknown, alt: 'Flip me!'}
}