import React from 'react';

const Comments = React.createClass({

  renderComment(comment, i) {
      console.log(comment);
      return (
        <div className="comment" key={i}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button className="remove-comments">&times;</button>
          </p>
        </div>
      );
  },
  render() {
    return (
      <div className="comment">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author"></input>
          <input type="text" ref="comment" placeholder="comment"></input>
          <input type="submit" hidden/>
        </form>
      </div>
    );
  }
});

export default Comments;
