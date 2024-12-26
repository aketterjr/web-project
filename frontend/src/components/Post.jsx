import React from "react";
import "../styles/Post.css"

function Post({ post, onDelete }) {
    const formattedDate = new Date(post.created_at).toLocaleDateString("en-US")
    
    return (
        <div className="post-container">
            <p className="post-author">{post.author}</p>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <p className="post-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(post.id)}>
                Delete
            </button>
        </div>
    );
}

export default Post
