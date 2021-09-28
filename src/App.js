import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import FavFruit from './components/FavFruit';


class App extends React.Component {

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
              {isAuthenticated?<Home/>:<Login/> }
                {/* TODO: if the user is logged in, render the `Home` component, if they are not, render the `Login` component */}
              </Route>
              <Route exact path="/favFruit">
              {isAuthenticated?<FavFruit/>:<Login/> }             
               </Route>
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
