import React , {Component} from "react";


class Post extends Component {
   
    render() { 
        return ( 
            <div >
            <img src = {this.props.image} alt=""  width="350" height="350"/>

        
            <p> {this.props.name} </p>

              </div>



         );
    }
}
 
export default Post;