import { useState } from "react";

function ColorPicker(){
    const [color, setColor] = useState('#FFFFFF');
    function handleChangeColor(event){
        setColor(event.target.value)
    }
    return(<>
         <div className="color-Picker-cont">
         <h1>Color Picker </h1>
         <p className="para">Selected Color: {color}</p>
         <div className="color-display" style={{backgroundColor: color}}></div>
         <label className="tat"htmlFor="">Select a Color:</label>
         <input className="ta"  type="color" value={color} onChange={handleChangeColor}/>
         </div>
    </>);
}
export default ColorPicker;