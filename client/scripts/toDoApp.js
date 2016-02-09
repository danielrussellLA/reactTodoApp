var React = require('react');
var InputBox = require('./inputBox.js');
var ToDoList = require('./toDoList.js');
// var ToDoListItem = require('./toDoListItem.js');

var ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      toDos: []
    };
  },

  addToDoListItem: function(item){
    //this.setState({toDos: })
   },

  render: function(){
    return (
      <div>
	ToDo App
	<InputBox onAddTodoListItem={this.addToDoListItem}/>
	<ToDoList /> 
      </div>
    )
  }

});

module.exports = ToDoApp;

