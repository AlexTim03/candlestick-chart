import { CandlestickData, Time } from 'lightweight-charts';

export interface ScheduleProps {
    candles: CandlestickData[],
    handleCandle: (time: Time) => void
}