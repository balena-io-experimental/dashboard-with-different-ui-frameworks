import React from "react";
import { Page } from "@shopify/polaris";
import Devicelist from "./Devicelist";
import { Link } from "react-router-dom";

const Applications = () => {
  return (
    <Page
      title="Sensors app"
      primaryAction={{ content: "Add device" }}
    >
      <Devicelist />
    </Page>
  );
};

export default Applications;
