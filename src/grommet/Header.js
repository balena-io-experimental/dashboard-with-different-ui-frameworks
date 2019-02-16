import React from "react";
import { Image, Button, Text, Menu, Box } from "grommet";
import { Document, Trigger, ChatOption } from "grommet-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const AppBar = props => (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="#1d384d"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
      {...props}
    />
  );
  // Only way to get text hover color on button
  const HeaderLink = styled(Button)`
    color: #c8c8c8;
    margin-right: 5px;
    &:hover {
      color: #fff;
    }
  `;

  return (
    <AppBar>
      <Box direction="row" align="center">
        {/* There isn't a nice way to make image smaller it seems https://stackoverflow.com/questions/44515193/grommet-ui-how-to-modify-the-size-of-the-components */}
        <Link to="/grommet">
          <Image
            style={{ height: 24 }}
            margin={{ right: "small" }}
            src="/logo-text-invert.svg"
          />
        </Link>
        <HeaderLink>
          <Box pad="small" direction="row" align="center" gap="small">
            <Trigger />
            <Text>Getting{"\u00A0"}started</Text>
          </Box>
        </HeaderLink>
        <HeaderLink>
          <Box pad="small" direction="row" align="center" gap="small">
            <Document />
            <Text>Docs</Text>
          </Box>
        </HeaderLink>
        <HeaderLink>
          <Box pad="small" direction="row" align="center" gap="small">
            <ChatOption />
            <Text>Forums</Text>
          </Box>
        </HeaderLink>
      </Box>
      <Menu
        label="My account"
        items={[
          { label: "Preferences", onClick: () => {} },
          { label: "Sign out", onClick: () => {} }
        ]}
      />
    </AppBar>
  );
};

export default Header;
