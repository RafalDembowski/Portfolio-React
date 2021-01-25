import './App.css';
import Navbar from './components/pages/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeSection from './components/pages/HomeSection';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomeSection} />
      </Switch>
    </Router>
  );
}

export default App;
