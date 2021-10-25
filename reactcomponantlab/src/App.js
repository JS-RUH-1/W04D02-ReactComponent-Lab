
import './App.css';
import Header from './Header';
import Post from './Post';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    <Header className="App-header"/>


    <div className="mypostes">
   <Post image="https://i.pinimg.com/originals/2c/93/57/2c9357a65a26758a1412967c8ec893d2.jpg" 
   name="Post1"/>
   <Post  image="https://i.pinimg.com/originals/d4/3c/e0/d43ce059d34b39bef244b92d905bddba.jpg"
    name="Post2"/>
   <Post  image="https://www.artisticaly.com/assets/Simple-Acrylic-Painting-Ideas-for-Beginners-29.jpg"
    name="Post3"/>

    </div>
    <Footer className="footer_bar" text="Contact Us" link="https://github.com/mahaatechcampus/W04D02-ReactComponent-Lab"/>
     
    </div>
  );
}

export default App;
