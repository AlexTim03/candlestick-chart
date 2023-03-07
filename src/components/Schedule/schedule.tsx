import { Candle } from "../../models/Candle"
import Candlestick from "./candlestick"

const Schedule = ({ candles, handleCandle }: { candles: Candle[], handleCandle: (idx: number) => void }) => (
    <div>
        {candles.map((c, index) => <Candlestick key={c.openTime} idx={index} handleCandle={handleCandle} />)}
    </div>
)

export default Schedule