import cn from 'classnames'
import { BinanceIntervalsEnum } from '../../models/BinanceIntervals'
import classes from './picker.module.css'

interface PickerProps {
    text: BinanceIntervalsEnum,
    isActive: boolean,
    handleInterval: (interval: BinanceIntervalsEnum) => void
}

const Picker = ({ text, isActive, handleInterval }: PickerProps) => (
    <span
        className={cn(classes.picker, {
            [classes.active]: isActive
        })}
        onClick={() => handleInterval(text)}
    >
        {text}
    </span>
)

export default Picker