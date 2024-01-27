const Color = ({ color, selectedColor, setSelectColor }) => {
    return (
        <div
            className={color === selectedColor ? color + " selected" : color}
            onClick={() => setSelectColor(color)}
        ></div>
    );
};

export default Color;
