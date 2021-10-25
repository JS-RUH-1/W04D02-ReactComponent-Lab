import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";

function App() {
  return (
    <div>
      <Header />
      <div class="container">
        <div class="row row-cols-3">
          <Post image="./images/1.jpeg" title="Post 1" />
          <Post image="./images/2.jpeg" title="Post 2" />
          <Post image="./images/3.jpeg" title="Post 3" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
