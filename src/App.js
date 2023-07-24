import './App.css';
import Navbar from './layouts/Navbar';
import Home from './views/Home';
import AddPupil from './pupils/AddPupil'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      
     
        <Routes>
          <Route exact path = "/" element = {<Home></Home>}></Route>
          <Route exact path = "/form" element = {<AddPupil></AddPupil>}></Route>

        </Routes>
      
     </Router>

    </div>
  );
}

export default App;
