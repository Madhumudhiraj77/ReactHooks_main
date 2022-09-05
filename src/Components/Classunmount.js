import React,{Component} from "react";

class Classunmount extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,name:''
        }
    }

componentDidMount(){
    document.title = `Clicked ${this.state.count} times`
}

componentDidUpdate(prevProps,prevState){
    if(prevState.count !== this.state.count){
        document.title = `Clicked ${this.state.count} times`
        console.log("ComponentDidupdate")
    }
    
}

    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={event=>{this.setState({name:event.target.value})}}/>
                <button onClick={()=>this.setState({count:this.state.count+1})}>you clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default Classunmount