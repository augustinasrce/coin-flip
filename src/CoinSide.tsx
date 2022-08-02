import tails from './assets/tails.png'
import heads from './assets/heads.png'
import unknown from './assets/repeat.svg'

export enum CoinSide {
    HEAD,
    TAIL,
    UNKNOWN
}

export const getRandomCoinSide = (): CoinSide => {
    const key: number = Math.round(Math.random());
    return key ? CoinSide.HEAD : CoinSide.TAIL;
}

export const imgConfig = {
    0: {url: heads, alt: 'Heads'},
    1: {url: tails, alt: 'Tails'},
    2: {url: unknown, alt: 'Flip me!'}
}