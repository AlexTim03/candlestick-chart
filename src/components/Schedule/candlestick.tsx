const Candlestick = ({ idx, handleCandle }: { idx: number, handleCandle: (idx: number) => void }) => (
    <div onClick={() => handleCandle(idx)}>
        Свеча {idx}
    </div>
)

export default Candlestick