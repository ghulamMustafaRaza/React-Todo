import React from "react"
import AddTodo from "./AddTodo"
import Task from "./Task"


class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }
    handleAdd(text){
        this.setState({
            todos: [...this.state.todos,{text:text,done:false}]
        })
    }
    removeTodo(index){
        var newTodo = [...this.state.todos];
        newTodo.splice(index,index+1)
        this.setState({
            todos: newTodo
        })
    }
    handleChaked(ind){
        var newTodo = [...this.state.todos];
        newTodo[ind].done = !newTodo[ind].done;
        this.setState({
            todos: newTodo
        })       
    }
    handleEdit(ind,text){
        var newTodo = [...this.state.todos];
        newTodo[ind].text = text;
        this.setState({
            todos: newTodo
        }) 
    }
    render(){
        return(
            <div>
                <AddTodo handleAdd={this.handleAdd.bind(this)}></AddTodo>
                <Task todos={this.state.todos} handleChaked={this.handleChaked.bind(this)} remove={this.removeTodo.bind(this)} ></Task>
            </div>
        )
    }
}
export default Todo;