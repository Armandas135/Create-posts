import React, {useContext} from 'react';
import MainContext from "../context/MainContext";
import AddNumbers from "./AddNumbers";


const ColouredBox = () => {

    const {color} = useContext(MainContext)
    let {num} = useContext(MainContext)

    return (
        <div>
            <div className="box d-flex j-center a-center" style={{backgroundColor: color}}>{num}</div>
        </div>
    );
};

export default ColouredBox;