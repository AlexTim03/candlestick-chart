import { useEffect, useRef, useCallback } from 'react';
import { createChart, ColorType, MouseEventParams } from 'lightweight-charts';
import { ScheduleProps } from '../models/ScheduleProps';

const candlestickOptions = { 
    upColor: '#72ED93', 
    downColor: '#BC1C34',     
    wickUpColor: '#72ED93', 
    wickDownColor: '#BC1C34',
    borderVisible: false, 
    baseLineVisible: false,
    priceLineVisible: false
} 

const useSchedule = ({candles, handleCandle}: ScheduleProps) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
   
    const handleClick = useCallback((param: MouseEventParams) => {
        if (param.time) {
            handleCandle(param.time)
        }        
    }, [handleCandle])

    useEffect(() => {    
        if (!chartContainerRef.current) {
            return
        }

        const chartOptions = { 
            layout: { textColor: 'white', background: { type: ColorType.Solid, color: 'black' }},
            rightPriceScale: { visible: false },
            width: chartContainerRef.current.clientWidth,
			height: 200            
            
        }
        const chart = createChart(chartContainerRef.current, chartOptions);
        chart.subscribeClick(handleClick);
        const candlestickSeries = chart.addCandlestickSeries(candlestickOptions);
        candlestickSeries.setData(candles);
        const timeApi = chart.timeScale()
        timeApi.applyOptions({ visible: false })
        timeApi.fitContent();

        return () => {
            chart.remove();
        }
    }, [candles, chartContainerRef, handleClick])
    
    return {
        chartContainerRef
    }
}

export default useSchedule