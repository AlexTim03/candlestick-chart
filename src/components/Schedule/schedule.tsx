import { CandlestickData } from 'lightweight-charts';
import useSchedule from './hooks/useSchedule'
//import Candlestick from "./candlestick"

const Schedule = ({ candles, handleCandle }: { candles: CandlestickData[], handleCandle: (idx: number) => void }) => {
    const { chartContainerRef } = useSchedule({ candles })

    return <div ref={chartContainerRef} />
}




export default Schedule