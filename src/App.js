import './App.css';
import Menu from './components/Menu';
import Content from './components/Content';

import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Content></Content>
      </Router>
    </div>
  );
}

export default App;