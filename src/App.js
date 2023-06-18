import './App.css';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import Players  from './components/Players';
import Detail from './components/Detail';
import Main from './components/Main.js';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Players/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
      
      </Routes>
      <Footer/>
    </div>
  )
}



export default App;
