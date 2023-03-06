import {useState, useEffect} from 'react'
import { BinanceApi } from '../../../api/api'
import {BinanceIntervals, BinanceIntervalsEnum} from '../../../models/BinanceIntervals'

const INTERVAL_BY_DEFAULT = BinanceIntervals._1d

const usePriceChart = () => {
    const [activeInterval, setActiveInterval] = useState<BinanceIntervalsEnum>(INTERVAL_BY_DEFAULT)

Date.now()

    useEffect(() => {
        const getKlines = async () => {
            
        }
        getKlines()
    }, [activeInterval])

    return {
        activeInterval,
        setActiveInterval
    }
}

export default usePriceChart