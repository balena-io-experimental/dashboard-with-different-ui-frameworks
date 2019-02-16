import React, { Component } from "react";
import Grommet from './Grommet';
import Polaris from './Polaris';
import { Navbar, Provider } from 'rendition';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

class App extends Component {
  render() {
    const Brand = (
      <div color="white">
        UI playground
      </div>
    )
    const Wrap = styled.div`
      position: relative;
    `;
    return (
      <Router>
        <main>
          <Provider>
            <Navbar brand={Brand} color="white">
              <Link to="/">Rendition</Link>
              <Link to="/grommet">Grommet</Link>
              <Link to="/polaris">Polaris</Link>
            </Navbar>
          </Provider>
          <Wrap>
            <Route path="/grommet" component={Grommet} />
            <Route path="/polaris" component={Polaris} />
          </Wrap>
        </main>
      </Router>
    )
  }
}

export default App;
