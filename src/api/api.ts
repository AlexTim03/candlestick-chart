import axios from 'axios'
import { BinanceIntervalsEnum } from '../models/BinanceIntervals'
import { BinanceResponse } from '../models/BinanceResponse'
import { Candle } from '../models/Candle'
import {CURRENCIES, LIMIT} from './config'

export class BinanceApi {

    static getKlines = async (interval: BinanceIntervalsEnum): Promise<Candle[]> => {
        try {
            
            const response = await axios.get<BinanceResponse>(`https://data.binance.com/api/v3/klines?symbol=${CURRENCIES}&limit=${LIMIT}&interval=${interval}`);
            const candles = response.data.map(v => ({
                openTime: v[0],
                openPrice: v[1],
                highPrice: v[2],
                lowPrice: v[3],
                closePrice: v[4],
            }))
            return candles
            
        } catch (error) {
            console.error('BinanceApi error: ', error)
            return []
        }
    }    
}

// Response:

// [
//   [
//     1499040000000,      // Kline open time
//     "0.01634790",       // Open price
//     "0.80000000",       // High price
//     "0.01575800",       // Low price
//     "0.01577100",       // Close price
//     "148976.11427815",  // Volume
//     1499644799999,      // Kline Close time
//     "2434.19055334",    // Quote asset volume
//     308,                // Number of trades
//     "1756.87402397",    // Taker buy base asset volume
//     "28.46694368",      // Taker buy quote asset volume
//     "0"                 // Unused field, ignore.
//   ]
// ]