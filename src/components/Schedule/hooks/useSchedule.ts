import { createChart, ColorType , CandlestickData } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

const candlestickOptions = { upColor: '#72ED93', downColor: '#BC1C34', borderVisible: false, wickUpColor: '#72ED93', wickDownColor: '#BC1C34' } 

const useSchedule = ({candles}: {candles: CandlestickData[]}) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
   
    useEffect(() => {    
        if (!chartContainerRef.current) {
            return
        }

        const chartOptions = { 
            layout: { textColor: 'white', background: { type: ColorType.Solid, color: 'black' }},
            width: chartContainerRef.current.clientWidth,
			height: 300            
            
        }
        const chart = createChart(chartContainerRef.current, chartOptions);
        const candlestickSeries = chart.addCandlestickSeries(candlestickOptions);
        candlestickSeries.setData(candles);
        chart.timeScale().fitContent();

        return () => {
            chart.remove();
        }
    }, [candles, chartContainerRef])
    
    return {
        chartContainerRef
    }
}

export default useSchedule