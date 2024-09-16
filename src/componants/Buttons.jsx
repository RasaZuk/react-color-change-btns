import { useState } from "react";

export function Buttons() {

    const [randomColor, setRandomColor] = useState("");

    const generateRandomColor = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setRandomColor(randomColor);
    }; 


    return (
        <>
        <div style={{backgroundColor: randomColor}} >
            <div  className="d-flex gap-2 justify-content-center py-5">
            <button onClick={generateRandomColor} className="btn btn-primary rounded-pill px-3" type="button">Click me</button>
            <button onClick={generateRandomColor} className="btn btn-secondary rounded-pill px-3" type="button">And me</button>
            <button onClick={generateRandomColor} className="btn btn-success rounded-pill px-3" type="button">Me too</button>
            <button onClick={generateRandomColor} className="btn btn-danger rounded-pill px-3" type="button">me also</button>
        </div>
        <div>
        <h2 style={{color: "white"}}>Background color code: {randomColor}</h2>
        </div>
        </div>  
        </> 
    );

}
