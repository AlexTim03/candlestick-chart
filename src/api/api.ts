import { BinanceIntervalsEnum } from '../models/BinanceIntervals'
import {CURRENCIES, LIMIT} from './config'

export class BinanceApi {

    static getKlines = async (interval: BinanceIntervalsEnum) => {
        try {
            const response = await fetch(`https://data.binance.com/api/v3/klines?symbol=${CURRENCIES}&limit=${LIMIT}&interval=${interval}`, {
                mode: 'no-cors'                
            })
            
            console.log(response.headers)
            
        } catch (error) {
            console.error('BinanceApi error: ', error)
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