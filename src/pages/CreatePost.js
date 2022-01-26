import React, {useRef, useContext} from "react";
import {useNavigate} from "react-router-dom";
import MainContext from "../context/MainContext";

const CreatePost = () => {
    const {setPosts} = useContext(MainContext)
    const {getPosts} = useContext(MainContext)
    const {getUser} = useContext(MainContext)
    const title = useRef()
    const article = useRef()
    const username = useRef()
    const navigateHome = useNavigate()
    const createNewPost = () => {
        const titleName = title.current.value
        const articleName = article.current.value
        const username0 = username.current.value
        const post = {
            title: titleName,
            article: articleName,
            username: username0,
            likes: []
        }
        setPosts([...getPosts, post])
        navigateHome('/')
    }

    return (
        <div className="createPostWrapper">
            <div className='d-flex column a-center j-center createPost p20'>
                <input className="p10 mg10" ref={title} placeholder='title' type="text"/>
                <input className="p10 mg10" ref={article} placeholder='article' type="text"/>
                <input className="p10 mg10" ref={username} value={getUser.name} type="text"/>
                <button onClick={createNewPost}>Create Post</button>
                <i style={{color: "yellow"}}>Don't try to create a post <br/> before you register and <br/> login. It's not gonna work.</i>
            </div>
        </div>
    );
};

export default CreatePost;