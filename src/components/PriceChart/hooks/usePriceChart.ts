import {useState} from 'react'
import {PickerText} from '../../types'

const usePriceChart = () => {
    const [activeInterval, setActiveInterval] = useState<string>(PickerText.t1d)

    return {
        activeInterval,
        setActiveInterval
    }
}

export default usePriceChart