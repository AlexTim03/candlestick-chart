import { CandlestickData } from 'lightweight-charts';
import { candleAmplitude } from '../../utils/candleAmplitude';
import { candleChange } from '../../utils/candleChange';
import classes from './columns.module.css'

const Columns = ({ candle }: { candle: CandlestickData | null }) => {
    const {
        open = 0,
        close = 0,
        high = 0,
        low = 0
    } = candle || {}


    return (
        <div className={classes.wrapper}>
            <div>
                <div className={classes.header}>Open/Close</div>
                <div>{open.toFixed(2)}</div>
                <div>{close.toFixed(2)}</div>
            </div>
            <div>
                <div className={classes.header}>High/Low</div>
                <div>{high.toFixed(2)}</div>
                <div>{low.toFixed(2)}</div>
            </div>
            <div>
                <div className={classes.header}>Change/Amplitude</div>
                <div>{candleChange(open, close).toFixed(2)}%</div>
                <div>{candleAmplitude(high, low).toFixed(2)}%</div>
            </div>
        </div>
    )
}



export default Columns