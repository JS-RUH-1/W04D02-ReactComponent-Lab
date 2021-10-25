import "./App.css";
import ii from "./image1.jfif";
function Post(props) {
  return (
    <div className="Card">
      <img width="100%" height="300vh" src={props.image} />
      <h3> {props.title}</h3>
    </div>
  );
}

export default Post;
