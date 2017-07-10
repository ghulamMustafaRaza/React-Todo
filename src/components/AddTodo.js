import React from "react"
import $ from "jquery"
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
        if($.trim(this.state.input).replace(/ /g,'')){
            this.props.handleAdd($.trim(this.state.input))
        }else{
            $('#NewTodo').focus()
        }
            this.setState({
                input: ''
            })
    }
    handleKey(ev){
        // console.log(ev.charCode)
        if(ev.charCode === 13){
            // alert('h')
            (this.handleAdd.bind(this))()
        }
    }
    render(){
        return(
            <div className="row" style={{display:"flex",justifyContent:"center",padding:50}}>
                <input type="text" id="NewTodo" onKeyPress={this.handleKey.bind(this)} value={this.state.input} onChange={this.handleChange.bind(this)} className="form-control col-xs-8"/>
                <button className="btn btn-primary col-xs-4" onClick={this.handleAdd.bind(this)}>Add Todo</button>
            </div>
        )
    }
}
export default AddTodo;