import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is an alert example"/>
          <div className="container">
            <Routes>
              <Route exact path="/"
                element={<Home />} >
              </Route>
              <Route exact path="/about"
                element={<About />}>
              </Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
