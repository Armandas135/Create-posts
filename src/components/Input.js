import React, {useContext, useRef} from 'react';
import MainContext from "./context/MainContext";


const Input = () => {
    const nameRef = useRef()
    const imageRef = useRef()
    const emailRef = useRef()
    const pass1Ref = useRef()
    const pass2Ref = useRef()


    const {getUsers, setUsers} = useContext(MainContext)

    function setColor() {
        const user = {
            name: nameRef.current.value,
            image: imageRef.current.value,
            email: emailRef.current.value,
            pass1: pass1Ref.current.value,
            pass2: pass2Ref.current.value,

        }
        if(user.name.length < 5 || user.name.length > 10) return
        if(!user.image.includes("http")) return
        if(!user.email.includes("@") && !user.email.includes(".")) return
        if(user.pass1.length < 3 || user.name.length > 10) return
        if(user.pass1 !== user.pass2) return

        setUsers([...getUsers, user])

    }


    return (
        <div>
            <input type="text" ref={nameRef} placeholder="name"/>
            <input type="text" ref={imageRef} placeholder="image"/>
            <input type="text" ref={emailRef} placeholder="email"/>
            <input type="text" ref={pass1Ref} placeholder="psw1"/>
            <input type="text" ref={pass2Ref} placeholder="psw2"/>

        </div>
    );
};

export default Input;