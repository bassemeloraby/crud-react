// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/create/create';
import Delete from './components/delete/delete';
import Read from './components/read/read';
import Update from './components/update/update';

function App() {
  return (
    <div className="main">
      <div>
        <h3>React Crud Operations</h3>
      </div>
      <br />
      <div>
        <Routes>
          <Route exact path="/" element={<Create />} />
        </Routes>
      </div>
      <br />
      <div>
        <Routes>
          <Route exact path="/read" element={<Read />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
