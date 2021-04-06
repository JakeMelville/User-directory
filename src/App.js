import { BrowserRouter as Router } from 'react-router-dom'
import Directory from './pages/Directory';
import './App.css';

function App() {
  return (
  <Router basename='/user-directory'>
    <div>
      <Directory />
    </div>
  </Router>

  );
}

export default App;
