import {useState, useEffect, useCallback} from 'react'
import {CandlestickData, Time} from 'lightweight-charts'
import {BinanceIntervals, BinanceIntervalsEnum} from '../../../models/BinanceIntervals'
import { BinanceApi } from '../../../api'

const INTERVAL_BY_DEFAULT = BinanceIntervals._1d

const usePriceChart = () => {
    const [activeInterval, setActiveInterval] = useState<BinanceIntervalsEnum>(INTERVAL_BY_DEFAULT)
    const [candles, setCandles] = useState<CandlestickData[]>([])
    const [activeCandle, setActiveCandle] = useState<CandlestickData | null>(null)

    useEffect(() => {

        const getKlinesAsync = async () => {
            const data = await BinanceApi.getKlines(activeInterval)            
            if (Array.isArray(data) && data.length) {
                setCandles(data)
                setActiveCandle(data[0])
            }
        }

        getKlinesAsync()       

    }, [activeInterval])

    const handleInterval = useCallback((interval: BinanceIntervalsEnum) => {
        setActiveInterval(interval)     
    }, [])

    const handleCandle = useCallback((time: Time) => {
        if (activeCandle === null || activeCandle.time !== time) {
            const candle = candles.find(c => c.time === time)
            if (candle) {
                setActiveCandle({...candle})
            }            
        }        
    }, [activeCandle, candles])

    return {
        candles,
        activeCandle,
        handleCandle,
        activeInterval,
        handleInterval,
    }
}

export default usePriceChart