import { PickerText } from '../types'
import classes from './picker.module.css'

const Picker = ({ text }: { text: PickerText }) => (
    <span className={classes.picker}>{text}</span>
)

export default Picker