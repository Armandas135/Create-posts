import React, {useContext, useRef} from 'react';
import MainContext from "../context/MainContext";

const SetColor = () => {

    const inp = useRef()
    const {updateColor} = useContext(MainContext)

    function setColor () {
        updateColor(inp.current.value)
    }

    return (
        <div>
            <input ref={inp} placeholder="enter color" type="text"/>
            <button onClick={setColor}>Set color</button>
        </div>
    );
};

export default SetColor;