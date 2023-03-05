import classes from './columns.module.css'

const Columns = () => {
    return (
        <div className={classes.wrapper}>
            <div>
                <div className={classes.header}>Open/Close</div>
                <div>1</div>
                <div>2</div>
            </div>
            <div>
                <div className={classes.header}>High/Low</div>
                <div>1</div>
                <div>2</div>
            </div>
            <div>
                <div className={classes.header}>Change/Amplitude</div>
                <div>1</div>
                <div>2</div>
            </div>
        </div>
    )
}



export default Columns