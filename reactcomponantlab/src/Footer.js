import React , {Component} from "react";


class Footer extends Component {
    
    render() { 
        return ( 

            <button>
            <a href={this.props.link}> {this.props.text}</a>
            </button>
         );
    }
}
 
export default Footer ;