import React, { Component } from "react";

import { TopBar, ActionList, Card } from "@shopify/polaris";

class Header extends Component {
  state = {
    searchActive: false,
    searchText: "",
    userMenuOpen: false,
    showMobileNavigation: false
  };

  render() {
    const { searchActive, searchText, userMenuOpen } = this.state;

    const userMenuActions = [
      {
        items: [{ content: "Community forums" }, { content: "Log out" }]
      }
    ];

    const userMenuMarkup = (
      <TopBar.UserMenu
        actions={userMenuActions}
        name="Jonny Quest"
        detail="email@domain.tld"
        initials="D"
        open={userMenuOpen}
        onToggle={this.toggleState("userMenuOpen")}
      />
    );

    const searchResultsMarkup = (
      <Card>
        <ActionList
          items={[
            { content: "Help center" },
            { content: "Community forums" },
            { content: "Predefined links!" }
          ]}
        />
      </Card>
    );

    const searchFieldMarkup = (
      <TopBar.SearchField
        onChange={this.handleSearchFieldChange}
        value={searchText}
        placeholder="Search"
      />
    );

    return (
      <TopBar
        showNavigationToggle={true}
        userMenu={userMenuMarkup}
        searchResultsVisible={searchActive}
        searchField={searchFieldMarkup}
        searchResults={searchResultsMarkup}
        onSearchResultsDismiss={this.handleSearchResultsDismiss}
        onNavigationToggle={this.toggleState("showMobileNavigation")}
      />
    );
  }

  toggleState = key => {
    return () => {
      this.setState(prevState => ({ [key]: !prevState[key] }));
    };
  };

  handleSearchFieldChange = value => {
    this.setState({ searchText: value });
    if (value.length > 0) {
      this.setState({ searchActive: true });
    } else {
      this.setState({ searchActive: false });
    }
  };

  handleSearchResultsDismiss = () => {
    this.setState(() => {
      return {
        searchActive: false,
        searchText: ""
      };
    });
  };
}
export default Header;
