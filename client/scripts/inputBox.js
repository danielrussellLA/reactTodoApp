var React = require('react');

var InputBox = React.createClass({
  handleSubmit: function(){
    event.preventDefault();
    this.props.onAddTodoListItem;
  },

  render: function(){
    return (
      <div>
        <form>
	  <input type='text' onSubmit={this.handleSubmit} />
        </form>
      </div>
    )
  }
});

module.exports = InputBox
