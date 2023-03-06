import cn from 'classnames'
import { BinanceIntervalsEnum } from '../../models/BinanceIntervals'
import classes from './picker.module.css'

const Picker = ({ text, isActive }: { text: BinanceIntervalsEnum, isActive: boolean }) => (
    <span className={cn(classes.picker, {
        [classes.active]: isActive
    })}>{text}</span>
)

export default Picker