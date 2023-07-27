import './App.css';
import Navbar from './layouts/Navbar';
import Pupil from './views/Pupil';
import AddPupil from './pupils/AddPupil'
import Student from './views/Student'
import ViewPupil from './pupils/ViewPupil';
import ViewStudent from './students/ViewStudent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      
     
        <Routes>
          <Route exact path = "/pupils" element = {<Pupil></Pupil>}></Route>
          <Route exact path = "/students" element = {<Student></Student>}></Route>
          <Route exact path = "/form" element = {<AddPupil></AddPupil>}></Route>
          <Route exact path = "/viewpupil/:id" element = {<ViewPupil></ViewPupil>}></Route>
          <Route exact path = "/viewstudent/:id" element = {<ViewStudent></ViewStudent>}></Route>

        </Routes>
      
     </Router>

    </div>
  );
}

export default App;
