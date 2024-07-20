import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/LoginForm';
import Register from './components/Form/UserFrom';
import NavBar from './Components/Navbar/NavBar';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* Other routes if needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
