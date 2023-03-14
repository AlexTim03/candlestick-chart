import CandleHeader from "../CandleHeader"
import Columns from "../Columns"
import Schedule from "../Schedule"
import TimeSwitch from "../TimeSwitch"
import classes from './priceChart.module.css'
import usePriceChart from './hooks/usePriceChart'

const PriceChart = () => {
    const {
        candles,
        activeCandle,
        handleCandle,
        activeInterval,
        handleInterval,
    } = usePriceChart()

    return (
        <div className={classes.wrapper}>
            <div className={classes.display}>
                <CandleHeader candle={activeCandle} />
                <Schedule candles={candles} handleCandle={handleCandle} />
                <Columns candle={activeCandle} />
            </div>
            <TimeSwitch activeInterval={activeInterval} handleInterval={handleInterval} />
        </div>
    )
}

export default PriceChart