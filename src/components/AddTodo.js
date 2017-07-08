import React from "react"

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }
    handleChange(ev){
        this.setState({
            input: ev.target.value
        })
    }
    handleAdd(){
        this.props.handleAdd(this.state.input)
        this.setState({
            input: ''
        })
    }
    render(){
        return(
            <div className="row" style={{display:"flex",justifyContent:"center",padding:50}}>
                <input type="text" value={this.state.input} onChange={this.handleChange.bind(this)} className="form-control col-xs-8"/>
                <button className="btn btn-primary col-xs-4" onClick={this.handleAdd.bind(this)}>Add Todo</button>
            </div>
        )
    }
}
export default AddTodo;