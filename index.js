//Using ES6 destructing
const { createElement } = React
const { render } = ReactDOM

//const title = React.createElement(
const title = createElement(
	'h1',
	{id: 'title', className: 'header'},
	'Hello World'
)

//ReactDOM.render(
render(
	title,
	document.getElementById('react-container')
)