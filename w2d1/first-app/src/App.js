import './App.css';
import Track from './components/Track';
import Progress from './components/Progress';

function App() {
  return (
    <div className="App">
      <Progress />
      <div style={{display: "inline-block"}}>
        <Track trackName={"Web Fund"} moduleName={"Fun"} />
        <Track trackName={"MERN"} moduleName={"Super Fun"} />
        <Track trackName={"Java"} moduleName={"Fun"} />
        <Track trackName={"Python"} moduleName={"Fun"} />
      </div>
    </div>
  );
}

export default App;
