import logo from "./logo.svg";
import "./App.css";
import Post from "./myComponents/post";
import Header from "./myComponents/header";
import Footer from "./myComponents/footer";
function App() {
  return (
    <div className="App">
      <Header text="Welcome to React " />
      <div className="myposts">
        <Post
          name="First Post"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTCV0g7dDxkWu_oW2_WOeG2QsMj1gFe3BUC2fbnen2L4He-tR6jKK-gOh3kYETmhMDzc&usqp=CAU"
        />
        <Post
          name="Second Post"
          image="https://upload.wikimedia.org/wikipedia/commons/f/fe/Colorful_face_painting%2C_2696947.jpg"
        />
        <Post
          name="Third Post"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TLwaAxyIWem88i6Up4SHxUCHj81x3toXtdvTxvXlYIHtDPAwJsgpTGtq16FSW3nY0uQ&usqp=CAU"
        />
      </div>
      <Footer name="@Abdulsalam" link="https://abdulsalam.website/" />
    </div>
  );
}

export default App;
