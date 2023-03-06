import { BinanceIntervals, BinanceIntervalsEnum } from '../../models/BinanceIntervals'
import Picker from './picker'
import classes from './timeSwitch.module.css'

const TimeSwitch = ({ activeInterval }: { activeInterval: BinanceIntervalsEnum }) => (
    <div className={classes.wrapper}>
        <span className={classes.header}>Time</span>
        {Object.values(BinanceIntervals).map(i => <Picker key={i} text={i} isActive={i === activeInterval} />)}
    </div>
)

export default TimeSwitch