import { CandlestickData } from 'lightweight-charts';
import classes from './candleHeader.module.css'

const CandleHeader = ({ candle }: { candle: CandlestickData | null }) => (
    <div className={classes.wrapper}>
        <div className={classes.title}>
            BTC/USDT Price Chart
        </div>
        <div className={classes.time}>
            {candle ? new Date(candle.time as number).toLocaleString('ru-RU') : '01.01.0001 0:00'}
        </div>
    </div>
)

export default CandleHeader