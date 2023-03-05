import { PickerText } from '../types'
import Picker from './picker'
import classes from './timeSwitch.module.css'

const TimeSwitch = () => (
    <div className={classes.wrapper}>
        <span className={classes.header}>Time</span>
        <Picker text={PickerText.t15m} />
        <Picker text={PickerText.t1h} />
        <Picker text={PickerText.t4h} />
        <Picker text={PickerText.t1d} />
        <Picker text={PickerText.t1w} />
    </div>
)

export default TimeSwitch