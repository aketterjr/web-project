import "../styles/Post.css";
import PropTypes from 'prop-types';

function Post({ post, onDelete }) {
    const formattedDate = new Date(post.created_at).toLocaleDateString("en-US")
    // const current_user = 90

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

Post.propTypes = {
    post: PropTypes.shape({
        author: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        date: PropTypes.Date,
        created_at: PropTypes.Date,
        id: PropTypes.number
    }),
    onDelete: PropTypes.func.isRequired,
}

export default Post
