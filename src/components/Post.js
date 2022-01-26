import React from 'react'
import MainContext from "../context/MainContext";

const Post = ({post}) => {
    return (
        <div className="postWrapper">
            <div className='post d-flex spb column'>
                <h1>Creator: {post.username}</h1>
                <h1>Title of Article: {post.title}</h1>
                <h1>Article: {post.article}</h1>
            </div>
        </div>
    );
};

export default Post;