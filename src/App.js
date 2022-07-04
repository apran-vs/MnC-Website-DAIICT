import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Courses from './components/Courses';
import CourseState from './context/courses/CourseState';
import NewsEventState from './context/news_events/NewsEventState';
import MncInfo from './components/MncInfo';


function App() {
  return (
    <>
      <div className='fix-width'>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={
              <NewsEventState>
                <Home />
              </NewsEventState>
            } />

            <Route path="/course" element={
              <CourseState>
                <Courses />
              </CourseState>
            } />
            <Route path="/info" element={<MncInfo />}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
