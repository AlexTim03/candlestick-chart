import axios from 'axios'
import {CandlestickData} from 'lightweight-charts'
import { BinanceIntervalsEnum } from '../models/BinanceIntervals'
import { BinanceResponse } from '../models/BinanceResponse'
import {CURRENCIES, LIMIT} from './config'

export class BinanceApi {

    static getKlines = async (interval: BinanceIntervalsEnum): Promise<CandlestickData[]> => {
        try {
            
            const response = await axios.get<BinanceResponse>(`https://data.binance.com/api/v3/klines?symbol=${CURRENCIES}&limit=${LIMIT}&interval=${interval}`);
            const candles = response.data.map(v => ({
                time: v[0],
                open: Number(v[1]),
                high: Number(v[2]),
                low: Number(v[3]),
                close: Number(v[4]),
            }))
            return candles
            
        } catch (error) {
            console.error('BinanceApi error: ', error)
            return []
        }
    }    
}