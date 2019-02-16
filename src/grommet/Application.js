import React from "react";
import { Heading, Grid, TextInput, Button, Box } from "grommet";
import {
  Home,
  Cube,
  Configure,
  ServerCluster,
  Server,
  Database,
  MapLocation,
  Group,
  Search,
  Add,
  Filter,
  More
} from "grommet-icons";
import styled from "styled-components";
import Devicelist from "./Devicelist";

const Application = () => {
  const MenuButton = styled(Button)`
    background: #ededed;
    border: 0;
    font-size: 70%;
    line-height: 1.2;
    margin: 5px 0;
    min-height: 80px;
    padding: 10px;
    border-radius: 0;
    &:hover {
      background: #dadada;
      border: none; // ha, it's not a border
      box-shadow: none;
    }
  `;
  return (
    <Grid
      fill
      rows={["flex"]}
      columns={["xsmall", "flex"]}
      areas={[
        { name: "sidebar", start: [0, 0], end: [1, 0] },
        { name: "main", start: [1, 0], end: [1, 0] }
      ]}
    >
      <Box gridArea="sidebar">
        <MenuButton label={<Home />} />
        <MenuButton
          label={
            <>
              <Cube />
              <br />
              devices
            </>
          }
        />
        <MenuButton
          label={
            <>
              <Configure />
              <br />
              fleet
              <br />
              configuration
            </>
          }
        />
        <MenuButton
          label={
            <>
              <ServerCluster />
              <br />
              environment
              <br />
              variables
            </>
          }
        />
        <MenuButton
          label={
            <>
              <Server />
              <br />
              service
              <br />
              variables
            </>
          }
        />
        <MenuButton
          label={
            <>
              <Database />
              <br />
              releases
            </>
          }
        />
        <MenuButton
          label={
            <>
              <MapLocation />
              <br />
              location
            </>
          }
        />
        <MenuButton
          label={
            <>
              <Group />
              <br />
              users
            </>
          }
        />
        <MenuButton
          label={
            <>
              <More />
              <br />
              more
            </>
          }
        />
      </Box>
      <Box gridArea="main">
        {/* Needs double wrap because REASONS */}
        <Box pad="medium">
          <Heading level={1} size="small" margin={{ bottom: "medium" }}>
            My application
          </Heading>
          <Box direction="row" justify="between" align="center" gap="small">
            <Box direction="row" gap="xsmall">
              <Button icon={<Add />} label="Add device" primary />
              <Button icon={<Filter />} label="Add filter" onClick={() => {}} />
            </Box>
            <Box
              width="large"
              gap="small"
              direction="row"
              align="center"
              pad={{ horizontal: "small", vertical: "xsmall" }}
            >
              <Search color="brand" />
              <TextInput type="search" placeholder="Search applications" />
            </Box>
            <Box direction="row" gap="xsmall">
              <Button label="Tags" disabled />
            </Box>
          </Box>
          <Devicelist />
        </Box>
      </Box>
    </Grid>
  );
};

export default Application;
