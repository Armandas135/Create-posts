import React, {useContext} from 'react';
import MainContext from "../context/MainContext";

const Toolbar = () => {


    return (
        <div className="toolbar">
            <div/>
            <div className="d-flex toolbarButtons">
                <div>
                    <div className="routeBtn">
                        Login
                    </div>
                </div>
                <div>
                    <div className="routeBtn">
                        Register
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Toolbar;