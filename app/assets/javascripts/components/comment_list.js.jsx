var CommentList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.comments.map(function(comment){
          return <CommentListElement key={comment.id} comment={comment} />;
        })}
      </div>
    );
  }
});
