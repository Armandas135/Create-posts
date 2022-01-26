import React, {useRef, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import MainContext from "../context/MainContext";

const LoginPage = () => {
    const home = useNavigate()
    const userName = useRef()
    const password = useRef()
    const {getUser} = useContext(MainContext)
    const login = () => {
        const username = userName.current.value
        const password1 = password.current.value
        if (username === getUser.name && password1 === getUser.password) {
            home("/")
            console.log("prisijunge")
        } else {
            alert("Wrong information provided, Señor.")
            console.log("neprisijunge bbz")
        }
    }

    return (
        <div className='loginWrapper'>
            <div className="d-flex column a-center j-center login p20">
                <input className="p10 mg10" ref={userName} placeholder="Enter Username" type="text"/>
                <input className="p10 mg10" ref={password} placeholder="Enter Password" type="password"/>
                <button onClick={() => {
                    login()
                }}>Log In
                </button>
                <i style={{color: "yellow"}}>Like system has not<br/> been implemented yet.<br/> Still working on it.</i>
            </div>
        </div>

    );
};

export default LoginPage;