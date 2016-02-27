// app/assets/javascripts/components/upvote.js.jsx
var Upvote = React.createClass({
  getInitialState: function() {
    return {
      comment: this.props.comment
    }
  },

  render: function() {
    var divClasses = classNames({
      "post-upvote": true,
      "post-upvote-upvoted": this.state.comment.up_voted
    });

    return (
      <div className={divClasses} onClick={this.handleClick}>
        <div className="post-upvote-arrow"></div>
        <div className="post-upvote-count">
          {this.state.comment.up_votes}
        </div>
      </div>
    );
  },

  handleClick: function() {
    var that = this;
    $.ajax({
      type: 'POST',
      url: Routes.upvote_comment_path(this.props.comment.id, { format: 'json' }),
      success: function(data) {
        that.setState({ comment: data });
      }
    });
  }
});
