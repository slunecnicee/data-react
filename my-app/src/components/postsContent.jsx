import { Component } from "react";

class PostsContent extends Component {
    render() {
      const {
        id,
        title,
        body,
        handleClick,
        activePostId,
        commentsLoading,
        commentsError,
        comments,
      } = this.props;
  
      return (
        <div className="post-cont" key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
          <div className="comments-section">
            {activePostId === id && (
              <>
                {commentsLoading ? (
                  <p>Loading comments...</p>
                ) : commentsError ? (
                  <p>Error loading comments.</p>
                ) : (
                  <ul className="comments-list">
                    {comments.map((comment) => {
                      const { id, name, email, body } = comment;
                      return (
                        <li key={id} className="comment-item">
                          <h4>Name: {name}</h4>
                          <h4>Email: {email}</h4>
                          <p>{body}</p>
                        </li>
                      );
                    })}
                  </ul>
                )}
                <button onClick={() => handleClick(id)}>
                  Read Less
                </button>
              </>
            )}
            {!activePostId && (
              <button onClick={() => handleClick(id)} >
                See Comments
              </button>
            )}
          </div>
        </div>
      );
    }
  }


export default PostsContent;