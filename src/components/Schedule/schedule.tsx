import { ScheduleProps } from './models/ScheduleProps'
import useSchedule from './hooks/useSchedule'

const Schedule = (props: ScheduleProps) => {
    const { chartContainerRef } = useSchedule(props)

    return <div ref={chartContainerRef} />
}




export default Schedule