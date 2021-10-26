import React, { Component } from 'react';

class Products extends Component {

    // constructor(props){
    //     super(props);
    //     this.onAction = this.onAction.bind(this); //Case 1 Handling Event
    // }

    // onAction(){
    //     alert(this.props.name);
    // }

    onAction2 = () => {
        //Case 1 Handling Event
        alert(this.props.name);
    }

    render() { 

        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.price}</p>
                <p>{this.props.stock}</p>
                <p><button className="btn-action" onClick={this.onAction2}>Action</button></p>
            </div>
        );
    }
}
 
export default Products;