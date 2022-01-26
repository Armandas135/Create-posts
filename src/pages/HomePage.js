import React, {useContext} from 'react';
import MainContext from "../context/MainContext";
import {useNavigate} from "react-router-dom";
import Post from "../components/Post";

const HomePage = () => {
    const nav = useNavigate()
    const {getPosts} = useContext(MainContext)
    const createPostNav = () => {
        nav('/createPost')
    }

    return (
        <div className="homePage">
            <div className="createPostButton">
                <button className="mg10" onClick={() => {
                    createPostNav()
                }}>
                    Create new post
                </button>
            </div>
            <div className='d-flex wrap'>
                {getPosts.map((x,i)=>{
                    return(
                        <Post post={x} key={i}/>
                    )
                })}
            </div>
        </div>
    );
};

export default HomePage;