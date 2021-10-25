import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Post from "./Post";
import image1 from "./image1.jfif";
import image2 from "./image2.jfif";
import image3 from "./image3.jfif";

function App() {
  return (
    <div>
      <Header element1="Component Lab" element2="Contact us" element3="Other" />
      <h1 className="welcome">WELCOME TO MY BLOG</h1>
      <div className="page">
        <Post title="First art" image={image1} />
        <Post title="Second art" image={image2} />
        <Post title="Third art" image={image3} />
      </div>
      <Footer name="Copy right 2021" />
    </div>
  );
}

export default App;
