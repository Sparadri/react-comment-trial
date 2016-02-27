var AddComment = React.createClass({
  getInitialState: function(){
    return {
      content: this.props.content,
      adrien: "before"
    }
  },

  handleKeyUp: function(e) {
    this.setState({
      content: this.refs.addComment.getDOMNode().value,
    })
  },

  handleValidation: function() {
    var that = this
    $.ajax({
      type: "POST",
      data: {comment: { content: that.state.content } },
      url: Routes.create_comment_path({format: 'json'}),
      success: function(data) {
       that.setState({
         content: "",
         adrien: "after"
       })
      }
    })
  },

  render: function(){
    return (
      <div>
      <textarea onKeyUp={this.handleKeyUp} value={this.state.value} ref="addComment"></textarea>
      <button onClick={this.handleValidation}>submit</button>
      </div>
    )
  }

})
