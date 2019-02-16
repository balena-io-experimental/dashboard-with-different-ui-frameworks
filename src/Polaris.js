import "@shopify/polaris/styles.css";
import React from "react";

import { Route } from "react-router-dom";
import { Frame, AppProvider } from "@shopify/polaris";
import Header from "./polaris/Header";
import Applications from './polaris/Applications';
import Application from './polaris/Application';

class PolarisView extends React.Component {
  render() {
    const theme = {
      colors: {
        topBar: {
          background: "#1d384d"
        }
      },
      logo: {
        width: 178,
        topBarSource: "/logo-text-invert.svg",
        url: "/polaris"
      }
    };

    return (
      <AppProvider theme={theme}>
        <Frame topBar={<Header />}>
          <Route exact path="/polaris/" component={Applications} />
          <Route exact path="/polaris/app" component={Application} />
        </Frame>
      </AppProvider>
    );
  }
}
export default PolarisView;
