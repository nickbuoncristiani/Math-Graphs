import React, {useState} from 'react'
import CourseSelection from './components/CourseSelection'
import Navbar from './components/Navbar'

function App() {
  const [activePage, setActivePage] = useState(<CourseSelection/>);
  const [course, setCourse] = useState(null); //active course

  return (
    <>
    <Navbar setActivePage={setActivePage}/>
    {
      React.cloneElement(
        activePage,
        {course: course,
          setCourse: setCourse,
          setActivePage: setActivePage
        }
      )
    }
    </>
  );
}

export default App;
