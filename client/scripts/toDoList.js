var React = require('react');
var ToDoListItem = require('./toDoListItem.js');

var ToDoList = React.createClass({
  render: function(){
    return (
      <ul className="toDoList">
	<ToDoListItem />
      </ul>
    )
  }
});

module.exports = ToDoList;
