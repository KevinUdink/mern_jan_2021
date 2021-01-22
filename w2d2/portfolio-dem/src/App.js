import './App.css';
import Header, { numberOfProjects } from './components/Header';
import AboutMe from './components/AboutMe';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Project projectName={"Window Wizard"} desc={"College student window washing"} />
      <Project projectName={"Puppy Rescue"} desc={"Find a foster family for puppies"} />
      <Project projectName={"Restroom Rater"} desc={"Ratings for public restrooms"} />
      <p>My number of Projects: { numberOfProjects }</p>
    </div>
  );
}

export default App;
