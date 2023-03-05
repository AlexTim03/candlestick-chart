import CandleHeader from "../CandleHeader"
import Columns from "../Columns"
import Schedule from "../Schedule"
import TimeSwitch from "../TimeSwitch"
import classes from './priceChart.module.css'
import usePriceChart from './hooks/usePriceChart'

const PriceChart = () => {
    const {
        activeInterval,
        setActiveInterval
    } = usePriceChart()
    return (
        <div className={classes.wrapper}>
            <div className={classes.display}>
                <CandleHeader />
                <Schedule />
                <Columns />
            </div>
            <TimeSwitch />
        </div>
    )
}

export default PriceChart