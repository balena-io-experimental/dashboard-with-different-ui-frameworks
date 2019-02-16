import React from "react";
import { Distribution, Text, Heading, Box } from "grommet";
import { Raspberry } from "grommet-icons";

const Application = () => {
  // const chartVals = [...Array(10)].map((v, i) => ({ value: [i, Math.floor(Math.random()*8)] }));
  const activityData = [
    { type: "online", color: "status-ok" },
    { type: "config", color: "status-warning" },
    { type: "updating", color: "neutral-3" },
    { type: "offline", color: "status-error" },
    { type: "inactive", color: "status-unknown" }
  ].map(v => ({ ...v, value: Math.floor(Math.random() * 10) }));

  return (
    <Box pad="small">
      <Heading level="3" margin="0">
        <Raspberry /> Sensors app
      </Heading>
      <Box justify="center" pad="large" width="100%">
        <Text
          alignSelf="center"
          size="xxlarge"
          weight="bold"
          textAlign="center"
        >
          {Math.floor(Math.random() * 100)}
        </Text>
      </Box>
      {/* Charts are really awful in Grommet, no idea why they even bothered */}
      {/* <Chart
        type="area"
        values={chartVals}
      /> */}
      <Distribution fill style={{ height: 120 }} values={activityData}>
        {value => (
          <Box pad="xsmall" background={value.color} fill>
            <Text size="xsmall">
              {value.value} {value.type}
            </Text>
          </Box>
        )}
      </Distribution>
    </Box>
  );
};

export default Application;
