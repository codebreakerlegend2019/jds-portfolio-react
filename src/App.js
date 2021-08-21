import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactPage';

function App() {
  return (
    <div>
      <Navbar />      
      <Switch>
          <Route path='/' exact>
            <HomePage/>
          </Route>

          <Route path='/about'>
            <AboutUsPage/>
          </Route>

          <Route path='/contact'>
            <ContactUsPage/>
          </Route>

      </Switch>

    </div>
  );
}

export default App;
