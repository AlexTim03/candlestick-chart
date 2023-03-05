import classes from './candleHeader.module.css'

const CandleHeader = ({ time = 'candle date/time' }: { time?: string }) => (
    <div className={classes.wrapper}>
        <div className={classes.title}>
            BTC/USDT Price Chart
        </div>
        <div className={classes.time}>
            {time}
        </div>
    </div>
)

export default CandleHeader