import React from "react";
import {
  Stack,
  Heading,
  DisplayText,
  Badge,
  Page,
  Layout,
  Caption,
  Card
} from "@shopify/polaris";
import { Link } from 'react-router-dom';

const Applications = () => {
  const AppCard = (
    <Layout.Section oneThird>
      <Card
        title={
          <Heading>
            Sensors app <Badge status="info">Starter</Badge>
          </Heading>
        }
        primaryFooterAction={{ content: "Manage" }}
      >
        <Card.Section>
          <DisplayText size="extraLarge">66</DisplayText>
          <DisplayText size="small">devices</DisplayText>
        </Card.Section>
        <Card.Section>
          <Stack distribution="equalSpacing">
            <div>
              1192031 <Caption>App ID</Caption>
            </div>
            <div>
              armv7hf <Caption>Architecture</Caption>
            </div>
            <div>
              181d921 <Caption>Release</Caption>
            </div>
          </Stack>
        </Card.Section>
      </Card>
    </Layout.Section>
  );
  return (
    <Page
      title="Applications"
      primaryAction={{ content: "Create application" }}
      actionGroups={[
        {
          title: "Views",
          actions: [{ content: "You haven't created any views yet" }]
        }
      ]}
      secondaryActions={[{ content: "Add filter" }]}
    >
      <Layout>
        {AppCard}
        {AppCard}
        {AppCard}
      </Layout>
    </Page>
  );
};

export default Applications;
