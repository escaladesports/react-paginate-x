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