import React from "react"

class Task extends React.Component{
    handleEdit(ind,ev){
        this.props.handleEdit(ind, ev.target.value)
    }
    render(){
        var todos = this.props.todos;
        return(
            <div>
                <ul className="todoTask">
                    {todos.length>0?
                        todos.map((todo,ind)=>(
                            <li className="clearfix row" key={ind.toString()}>
                                <div className="col-xs-8">
                                    <span className="index">{ind+1}).</span>
                                    <input type="checkbox" name="" checked={todo.done} onChange={()=>{this.props.handleChaked(ind)}} />
                                    <span contentEditable onChange={this.handleEdit} style={{textDecoration:todo.done?"line-through":"none",opacity:todo.done?0.3:1}}>{todo.text}</span>
                                </div>
                                <div className="col-xs-4">
                                    <div className="btn btn-danger pull-right" onClick={this.props.remove.bind(null,ind)}>Delete</div>                                    
                                </div>
                            </li>
                        ))
                    :
                    <h1 className="text-center">loading...</h1>
                    }
                </ul>
            </div>
        )
    }
}
export default Task;