# Dashboard in Grommet
Based on create-react-app. `npm i` and `npm start` to run it locally.

Note on theming: we are looking more for "variations" than a full on theming capabilities.

## [Grommet](https://v2.grommet.io)
Grommet is a collection of low-level components - think components like Box, Input, Button… It will probably lead to us building a framework on top of it to have repeatable patterns for navigation, data tables etc.

### Pros
- big focus on a11y
- based on styled-components
- [its theming system has some great ideas](https://github.com/grommet/grommet/blob/master/src/js/themes/base.js)

### Cons
- There are no high-level components, like button group or navbar, those have to be built from scratch
- If it's not in the theme object (like a button text color on hover), it's inaccessible without direct CSS rewrite with styled-components. You won't avoid extending components with styled-components
- [its theming system has some terrible ideas](https://github.com/grommet/grommet/blob/1ee7b8d6fa8dca2d079d0382133df45fbbed67b3/src/js/themes/base.js#L266-L269)
- capabilities for responsive layouts/components are very limited. You can reimplement the component multiple times for different size breakpoints with [ResponsiveContext](https://v2.grommet.io/responsivecontext). There is a [behavior with padding/margins getting smaller on smaller screen](https://github.com/grommet/grommet/blob/master/src/js/themes/base.js#L121-L155). But handling anything else (even button wrapping!) is up to Grommet user

## [Polaris](https://polaris.shopify.com)

Polaris is focused on building SaaS/ecommerce-kind of apps. It is opinionated and heavily relies on semantic components and composition. By semantic components I mean high-order ones like Page/Frame/Layout, which are working as a slotted template.

For example, see [`Page` from Polaris docs](https://polaris.shopify.com/components/structure/page):

```js
// All these attributes are optional
<Page
  breadcrumbs={[{content: 'Products', url: '/products'}]}
  title="Jar With Lock-Lid"
  primaryAction={{content: 'Save', disabled: true}}
  secondaryActions={[{content: 'Duplicate'}, {content: 'View on your store'}]}
>
  <p>Page content</p>
</Page>
```

Same could be said about [`Frame`](https://polaris.shopify.com/components/structure/frame) and others. Attributes really works as slots, so you can even pass a full React element like so `title={<h2>Title</h2>}`. This approach solves multiple issues:

- responsive design - it's much easier to provide better responsive experience, because the UI is constrained to these attributes and their combination (image writing Storybook stories to cover these)
- repeatability/consistency

### Pros
- Overlap with our use-case ((data)lists, dashboards, navigation patterns…) and with Rendition
- [Sketch UI Kit available](https://polaris.shopify.com/resources/polaris-ui-kit)
- Already used outside of Shopify, we wouldn't be an outlier user - I've spoken to maintainer of Polaris and they are pushing their UI to partners doing integrations or building products on top of Shopify API/products

### Cons
- Not built on styled-components
- Only most basic theming out of the box

Currently, we could probably reduce Rendition to ~4 custom components and use the rest from Polaris.
