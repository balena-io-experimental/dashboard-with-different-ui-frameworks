import React, { Component } from "react";
import { Box, DataTable, Text, CheckBox } from "grommet";
import { Info } from "grommet-icons";

const DATA = [
  {
    online: true,
    name: "damaged-field",
    uuid: "d747321",
    lastseen: "Yesterday",
    os: "balenaOS 2.29.0+rev1",
    osVariant: "development"
  },
  {
    online: false,
    name: "magic-field",
    uuid: "d757321",
    lastseen: "A month ago",
    os: "balenaOS 3.29.0+rev1",
    osVariant: "development"
  },
  {
    online: true,
    name: "tragic-field",
    uuid: "b747321",
    lastseen: "Yesterday",
    os: "balenaOS 1.29.0+rev1",
    osVariant: "development"
  },
  {
    online: false,
    name: "hidden-field",
    uuid: "a747321",
    lastseen: "Yesterday",
    os: "balenaOS 2.29.0+rev1",
    osVariant: "development"
  }
];

const controlledColumns = [
  {
    property: "status",
    header: <Text>Status</Text>,
    render: d => (
      <Text>
        <Info size="small" /> {d.online ? "Online" : "Offline"}
      </Text>
    ),
    sortable: false
  },
  {
    property: "name",
    header: <Text>Name</Text>,
    primary: true,
    render: d => (
      <Text>
        <a href="javascript:;">{d.name}</a>
      </Text>
    )
  },
  {
    property: "lastseen",
    sortable: false,
    header: <Text>Last Seen</Text>
  },
  {
    property: "os",
    header: <Text>OS version</Text>
  },
  {
    property: "osVariant",
    header: <Text>OS variant</Text>,
    render: d => (
      <Box background="neutral-1" round pad="xsmall">
        <Text size="xsmall">{d.osVariant}</Text>
      </Box>
    )
  },
  {
    property: "uuid",
    header: <Text>UUID</Text>,
    render: d => (
      <Text size="small">
        <code>{d.uuid}</code>
      </Text>
    )
  }
];

class ControlledDataTable extends Component {
  state = {
    checked: []
  };

  onCheck = (event, value) => {
    const { checked } = this.state;
    if (event.target.checked) {
      checked.push(value);
      this.setState({ checked });
    } else {
      this.setState({ checked: checked.filter(item => item !== value) });
    }
  };

  onCheckAll = event =>
    this.setState({
      checked: event.target.checked ? DATA.map(datum => datum.name) : []
    });

  render() {
    const { checked } = this.state;

    // Apparently there isn't anything in the `theme` to overwrite datatable
    // https://v2.grommet.io/datatable
    return (
      <DataTable
        margin={{ top: "medium" }}
        columns={[
          {
            property: "checkbox",
            render: datum => (
              <CheckBox
                key={datum.name}
                checked={checked.indexOf(datum.name) !== -1}
                onChange={e => this.onCheck(e, datum.name)}
              />
            ),
            header: (
              <CheckBox
                checked={checked.length === DATA.length}
                indeterminate={
                  checked.length > 0 && checked.length < DATA.length
                }
                onChange={this.onCheckAll}
              />
            ),
            sortable: false
          },
          ...controlledColumns
        ].map(col => ({ ...col }))}
        data={DATA}
        sortable
        size="medium"
      />
    );
  }
}

export default ControlledDataTable;
