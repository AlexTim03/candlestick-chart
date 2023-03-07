import { BinanceIntervals, BinanceIntervalsEnum } from '../../models/BinanceIntervals'
import Picker from './picker'
import classes from './timeSwitch.module.css'

interface TimeSwitchProps {
    activeInterval: BinanceIntervalsEnum,
    handleInterval: (interval: BinanceIntervalsEnum) => void
}

const TimeSwitch = ({ activeInterval, handleInterval }: TimeSwitchProps) => (
    <div className={classes.wrapper}>
        <span className={classes.header}>Time</span>
        {Object.values(BinanceIntervals).map(i => <Picker key={i} text={i} isActive={i === activeInterval} handleInterval={handleInterval} />)}
    </div>
)

export default TimeSwitch