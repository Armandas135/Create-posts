import React, {useContext} from 'react';
import MainContext from "../context/MainContext";


const AddNumbers = () => {
    let {num} = useContext(MainContext)
    function giveNumber () {
        num += +1
        console.log(num)
    }
    return (
        <div>
            <button className="button1" onClick={giveNumber}>+1</button>
            <button>+5</button>
            <button>+10</button>
            <button>+20</button>
        </div>
    );
};

export default AddNumbers;