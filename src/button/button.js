import React,{Component} from "react";
class Button extends Component{
    state={
        message:"Click Here",
        try:true
    }
    clickHandler = (event)=>{
        this.setState({message:"Clicked",try:false})
    }
    double=(event)=>{
        this.setState({message:"Click Here",try:true})
    }
    render(){
        let className="btn"
        if(this.state.try){
            className="red"
        }
        else{
            className="blue"
        }
        return(
            <>
            <button className={className} type="button" onClick={this.clickHandler} onDoubleClick={this.double}>{this.state.message}</button>
            
            </>
        )
    }
}
export default Button