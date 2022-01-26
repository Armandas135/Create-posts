import React, {useRef, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import MainContext from "../context/MainContext";

const RegisterPage = ({userCreated}) => {
    const userName = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const nav = useNavigate()
    const {setUser} = useContext(MainContext)
    const createUser = () => {
        const username = userName.current.value
        const password1 = password.current.value
        const password2 = confirmPassword.current.value
        const user = {
            name: username,
            password: password1,
            confirmPassword: password2
        }
        if (user.password === user.confirmPassword) {
            // userCreated = !userCreated
            // console.log(userCreated)
            setUser(user)
            console.log(user)
            nav('/loginPage')
        } else {
            alert("Make sure the passwords are matching dude xd")
        }
    }

    return (
        <div className="registerWrapper">
            <div className='d-flex column a-center j-center register p20'>
                <input className="p10 mg10" ref={userName} placeholder="Enter Username" type="text"/>
                <input className="p10 mg10" ref={password} placeholder="Enter Password" type="password"/>
                <input className="p10 mg10" ref={confirmPassword} placeholder="Enter Password... Again" type="password"/>
                <button onClick={() => {
                    createUser()
                }}>Register
                </button>
                <i style={{color: "yellow"}}>You can still see the <br/> "register" button. It's <br/> gonna be fixed in the <br/> new update.</i>
            </div>
        </div>
    );
};

export default RegisterPage;