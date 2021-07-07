import '../css/App.css';
import Clock from "./Clock"
import Dogs from './Dogs';

const App = () => {
  console.log("Rendering App")
  return (
    <div className="App">
      <Clock date={new Date()}/>
      <Dogs />
    </div>
  );
}

export default App;
