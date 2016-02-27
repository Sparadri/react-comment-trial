var CommentText = React.createClass({
  getInitialState: function() {
    return {
      isEditing: false,
      content: this.props.comment.content
   }
  },

  render: function() {
    var pClasses = classNames({
       "hidden": this.state.isEditing
    })
     var textareaClasses = classNames({
       "hidden": !this.state.isEditing,
       "edit-content": true
     })
     var buttonClasses = classNames({
       "hidden": !this.state.isEditing,
       "btn": true
     })
     return (
       <div>
         <p className={pClasses} onClick={this.handleClick}>{this.state.content}</p>
         <textarea className={textareaClasses} defaultValue={this.state.content} onKeyUp={this.handleKeyUp} ref='commentText'></textarea>
         <button className={buttonClasses} onClick={this.handleEdition}>Edit</button>
       </div>
     )
  },

 handleClick: function() {
   this.setState({
     isEditing: true
   })
 },

  handleKeyUp: function(e) {
    if (e.which == 27) {
      this.setState({
        isEditing: false,
        content: ''
     })
   } else {
     this.setState({
       content: this.refs.commentText.getDOMNode().value
     })
   }
  },

 handleEdition: function() {
   var that = this
   $.ajax({
     type: 'PATCH',
     data: {comment: { content: that.state.content}},
     url: Routes.comment_path({format: 'json', id: that.props.comment.id}),
     success: function(data) {
       that.setState({
         isEditing: false,
         content: that.state.content
       })
     }
   })
 }
})
