var CommentListElement = React.createClass({
  render: function() {
    return (
      <div className="post">
        <div></div>
        <div className="post-upvote">
          <Upvote comment={this.props.comment} />
        </div>
        <div className="post-body">
          <CommentText comment={this.props.comment} />
        </div>
        <div className="post-controls">
          <div className="post-control">
            <div className="user-badge-container ">
              <img src={this.props.comment.user.avatar_url} className="avatar"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
