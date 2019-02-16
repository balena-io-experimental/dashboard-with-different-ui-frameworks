import React from "react";
import { Grommet } from "grommet";
import { Route } from "react-router-dom";
import Header from "./grommet/Header";
import Applications from "./grommet/Applications";
import Application from "./grommet/Application";

const GrommetView = () => {
  const theme = {
    table: {
      body: {
        // border: '1px solid grey',
        // border: { bottom: '1px solid grey' },
        // borderBottom: '1px solid grey',
        border: { side: 'bottom', size: 'xsmall' },
        // This is horrible
      },
    }
  };
  return (
    <Grommet theme={theme}>
      <Header />
      <Route exact path="/grommet/" component={Applications} />
      <Route exact path="/grommet/app" component={Application} />
    </Grommet>
  );
};

export default GrommetView;
