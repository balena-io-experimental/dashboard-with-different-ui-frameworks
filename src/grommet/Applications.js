import React, { Component } from "react";
import {
  FormField,
  Select,
  Layer,
  Menu,
  TextInput,
  Button,
  Heading,
  TextArea,
  Box
} from "grommet";
import {
  Close,
  CaretDown,
  Analytics,
  Search,
  Add,
  Filter
} from "grommet-icons";
import { Link } from "react-router-dom";
import Application from "./ApplicationItem";
import styled from "styled-components";

class Applications extends Component {
  state = { open: false, select: "" };

  onOpen = () => this.setState({ open: true });

  onClose = () => {
    this.setState({ open: undefined });
  };

  render() {
    const AppBox = styled(Box)`
      border: 2px solid grey;
      text-decoration: none;
      color: black;
      flex-basis: calc(25% - 2 * 12px);
      &:hover {
        border-color: #00739d; // Couldn't get this from theme object this.theme.global.colors['neutral-3']
      }
    `;

    const AppLink = styled(Link)`
      text-decoration: none;
      color: inherit;
    `;
    const { open, select } = this.state;
    return (
      <Box pad="medium">
        {/* No breadcrumbs component or anything similar */}
        <Heading level={1} size="small" margin={{ bottom: "medium" }}>
          Applications
        </Heading>
        <Box direction="row" justify="between" align="center" gap="small">
          <Box direction="row" gap="xsmall">
            <Button
              icon={<Add />}
              label="Create application"
              onClick={this.onOpen}
              primary
            />
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
          {/* There is a dropdown button and Menu, with a very little difference */}
          <Menu
            label={
              <Button
                icon={<Analytics />}
                label={
                  <Box direction="row" align="center">
                    Views{"\u00A0"}
                    <CaretDown />
                  </Box>
                }
              />
            }
            icon={false}
            items={[
              { label: "You haven't created any views yet", onClick: () => {} }
            ]}
          />
        </Box>

        <Box fill align="center" justify="center">
          {open && (
            <Layer
              position="right"
              full="vertical"
              modal
              onClickOutside={this.onClose}
              onEsc={this.onClose}
            >
              <Box
                as="form"
                fill="vertical"
                overflow="auto"
                width="medium"
                pad="medium"
                onSubmit={this.onClose}
              >
                <Box flex={false} direction="row" justify="between">
                  <Heading level={2} margin="none">
                    Add
                  </Heading>
                  <Button icon={<Close />} onClick={this.onClose} />
                </Box>
                <Box flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
                  <FormField label="Name">
                    <TextInput />
                  </FormField>
                  <FormField label="Type">
                    <Select
                      options={[
                        "one",
                        "two",
                        "three",
                      ]}
                      value={select}
                      onSearch={() => {}}
                      onChange={({ option }) =>
                        this.setState({ select: option })
                      }
                    />
                  </FormField>
                  <FormField label="Description">
                    <TextArea />
                  </FormField>
                </Box>
                <Box flex={false} as="footer" align="start">
                  <Button
                    type="submit"
                    label="Submit"
                    onClick={this.onClose}
                    primary
                  />
                </Box>
              </Box>
            </Layer>
          )}
        </Box>

        {/*
          Nope, you can't get wrap and gap working together
          https://github.com/grommet/grommet/issues/1885
        */}
        <Box direction="row" wrap={true}>
          <AppBox background="light-1" margin="small">
            <AppLink to="/grommet/app">
              <Application />
            </AppLink>
          </AppBox>
          <AppBox background="light-1" margin="small">
            <AppLink to="/grommet/app">
              <Application />
            </AppLink>
          </AppBox>
          <AppBox background="light-1" margin="small">
            <AppLink to="/grommet/app">
              <Application />
            </AppLink>
          </AppBox>
          <AppBox background="light-1" margin="small">
            <AppLink to="/grommet/app">
              <Application />
            </AppLink>
          </AppBox>
          <AppBox background="light-1" margin="small">
            <AppLink to="/grommet/app">
              <Application />
            </AppLink>
          </AppBox>
        </Box>
      </Box>
    );
  }
}

export default Applications;
