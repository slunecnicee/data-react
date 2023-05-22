import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true,
      isError: false,
      activePostId: null,
      comments: [],
      commentsLoading: false,
      commentsError: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          posts: data,
          isLoading: false,
          isError: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({
          posts: [],
          isLoading: false,
          isError: true,
        });
      });
  }

  fetchComments(postId) {
    this.setState((prevState) => ({
      activePostId: prevState.activePostId === postId ? null : postId,
      comments: [],
      commentsLoading: !prevState.commentsLoading,
      commentsError: false,
    }));

    if (this.state.activePostId !== postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            comments: data,
            commentsLoading: false,
            commentsError: false,
          });
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
          this.setState({
            comments: [],
            commentsLoading: false,
            commentsError: true,
          });
        });
    }
  }

  render() {
    const {
      posts,
      isLoading,
      isError,
      activePostId,
      comments,
      commentsLoading,
      commentsError,
    } = this.state;

    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    if (isError) {
      return <h1>Error fetching data.</h1>;
    }

    return (
      <div className="posts">
        <h1>Post List</h1>
        <ul className="post-items">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <div className="comments-section">
                {activePostId === post.id && (
                  <>
                    {commentsLoading ? (
                      <p>Loading comments...</p>
                    ) : commentsError ? (
                      <p>Error loading comments.</p>
                    ) : (
                      <ul className="comments-list">
                        {comments.map((comment) => (
                          <li key={comment.id} className="comment-item">
                            <h4>Name:{comment.name}</h4>
                            <h4> Email:{comment.email}</h4>
                            <p>{comment.body}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                    <button
                      onClick={() => this.fetchComments(post.id)}
                      className="toggle-comments-btn"
                    >
                      Read Less
                    </button>
                  </>
                )}
                {!activePostId && (
                  <button
                    onClick={() => this.fetchComments(post.id)}
                    className="toggle-comments-btn"
                  >
                    See Comments
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;



