import { ValueOf } from "../utils/valueOf"

export const BinanceIntervals = Object.freeze({
    _15m: '15m',
    _1h:'1h',
    _4h: '4h',
    _1d: '1d',
    _1w: '1w'
} as const)

export type BinanceIntervalsEnum = ValueOf<typeof BinanceIntervals>

