# react-paginate-x

A bare-bones React component for pagination UI that doesn't require CSS.

## Install

With npm:

```bash
npm install --save react-paginate-x
```

Or with Yarn:

```bash
yarn add react-paginate-x
```

## Usage

```jsx
import Pagination from 'react-paginate-x'

...

<Pagination currentPage={1} totalPages={50} />
```

To use with the default or a custom link element:

```jsx
<Pagination
	link={(n, text) => (
		<a href={`/page/${n}`}>{text}</a>
	)}
	currentPage={1}
	totalPages={50} />
```

Or to use with an onClick handler:

```jsx
<Pagination
	onClick={n => console.log('Go to page', n)}
	currentPage={1}
	totalPages={50} />
```

## Options

Property | Description | Type | Default
--- | --- | --- | ---
currentPage | The current page | Number | `1`
totalPages | Total number of pages | Number | `undefined`
link | A function that creates the element for links | Function | `undefined`
previous | Contents of the previous link | String or Boolean | `"previous"`
next | Contents of the next link | String or Boolean | `"next"`
first | Contents of the first link | String or Boolean | `false`
last | Contents of the last link | String or Boolean | `false`
breakDelimiter | Contents of the page breaks | String or Component | `"..."`
boundaryPagesRange | Number of pages on the edges | Number | `2`
siblingPagesRange | Number of pages next to active page | Number | `2`
hideInactive | Hides the first, last, previous, or next links when active | Boolean | `true`