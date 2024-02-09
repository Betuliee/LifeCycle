import { Component } from "react";

class Sayac extends Component{

    constructor(props){
        console.log("constructor calisti")
        super(props)



        this.state={
            count:0
        };
    }

componentDidUpdate(){
    console.log('did update çalisti')
}
    
componentDidMount(){
    console.log('dimount calisti')
}

componentWillUnmount(){
    console.log('Cçass component ekrandan gitti')
}

incrementCount = () =>{
    this.setState({count:this.state.count +1})
}   

changeCount = (changeType) =>{
    if(changeType === 'arttir'){
        this.setState({count:this.state.count +1})
    }else if(changeType === 'azalt'){
        this.setState({count:this.state.count -1})
    }
}

decrementCount = () =>{
    this.setState({count:this.state.count -1})
}    
    render(){
        console.log('render metotu calisiyor')
        return(
            <div>
                <button onClick={() => this.changeCount('arttir')}>
                    ARTTIR
                </button> 
                <p>{this.state.count}</p>
                <button onClick={() => this.changeCount('azalt')}>
                    AZALT
                </button>
            </div>
        )
    }
}

export default Sayac;