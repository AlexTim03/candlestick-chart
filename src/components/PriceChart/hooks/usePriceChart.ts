import {useState, useEffect, useCallback} from 'react'
import {CandlestickData} from 'lightweight-charts'
import {BinanceIntervals, BinanceIntervalsEnum} from '../../../models/BinanceIntervals'
import { BinanceApi } from '../../../api'

const INTERVAL_BY_DEFAULT = BinanceIntervals._1d

const usePriceChart = () => {
    const [activeInterval, setActiveInterval] = useState<BinanceIntervalsEnum>(INTERVAL_BY_DEFAULT)
    const [candles, setCandles] = useState<CandlestickData[]>([])
    const [activeCandleIdx, setActiveCandleIdx] = useState<number>(0)

    useEffect(() => {

        const getKlinesAsync = async () => {
            const data = await BinanceApi.getKlines(activeInterval)            
            if (Array.isArray(data) && data.length) {
                setCandles(data)
                setActiveCandleIdx(0)
            }
        }

        getKlinesAsync()       

    }, [activeInterval])

    const handleInterval = useCallback((interval: BinanceIntervalsEnum) => {
        setActiveInterval(interval)     
    }, [])

    const handleCandle = useCallback((idx: number) => {
        if (idx !== activeCandleIdx) {
            setActiveCandleIdx(idx)            
        }        
    }, [activeCandleIdx])

    return {
        candles,
        activeCandleIdx,
        handleCandle,
        activeInterval,
        handleInterval,
    }
}

export default usePriceChart