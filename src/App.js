import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
function App() {
  return (
    <div className="main">
      <div>
        <h3>React Crud Operations</h3>
      </div>
      <br />
      <div>
        <Create />
      </div>
      <br />
      <div>
        <Read />
      </div>
    </div>
  );
}

export default App;
