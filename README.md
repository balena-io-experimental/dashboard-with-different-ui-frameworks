# Dashboard in Grommet
Based on create-react-app. `npm i` and `npm start` to run it locally.

## Grommet
- Used [grommet-starter-new-app](https://github.com/grommet/grommet-starter-new-app) for bootstrap
- There are no Higher order components, like button group or navbar, those have to be rebuilt from scratch
- If it's not in the theme object (like a button text color on hover), it's inaccessible without direct CSS rewrite with styled-components.
- capabilities for responsive layouts/components are pretty limited. You can reimplement the component multiple times for different size breakpoints with [ResponsiveContext](https://v2.grommet.io/responsivecontext)

## Polaris - WIP