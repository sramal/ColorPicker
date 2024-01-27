import { useState } from "react";
import Color from "./Color";

function Picker() {
    const [selectedColor, setSelectColor] = useState("red");

    return (
        <div id="container">
            <div id="navbar">
                <div>Currently selected: </div>
                <div className={selectedColor}>{selectedColor}</div>
            </div>
            <div id="colors-list">
                <Color
                    color="red"
                    selectedColor={selectedColor}
                    setSelectColor={setSelectColor}
                />
                <Color
                    color="blue"
                    selectedColor={selectedColor}
                    setSelectColor={setSelectColor}
                />
                <Color
                    color="green"
                    selectedColor={selectedColor}
                    setSelectColor={setSelectColor}
                />
            </div>
        </div>
    );
}

export default Picker;
