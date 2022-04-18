# Automated Testing in React

This project is a practice project from [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

## Key Concepts

What to test
- Unit Tests
  - Different building blocks that make up application
  - Small building blocks
  - Only test one main thing each so they fail for a clear reason

How to test
- Success and error cases 
- Rare but possible scenarios and results

Use Jest for running tests and asserting results

Use React Testing Library for simulating the tests

The Three A's
- Arrange
- Act
- Assert

## Jest

```js
test('description of test', () => {
  // Arrange
  render(<SomeComponentJSX />)
  // Act
  userEvent.click(<someClickableElement/>)
  // Assert
  const someElement = screen.getByText(/regular expression text/i)
  expect(someElement).toBeInTheDocument()
})
```

use `queryByText` for finding things that should NOT be there, as it returns null if not found

`find...` queries return a promise, so use for async

[Available HTML Roles](https://www.w3.org/TR/html-aria/#docconformance)

avoid testing functions that have not been written by you (e.g. `fetch`)
- use mocks by overwriting functions with `jest.fn()`

```js
window.fetch = jest.fn()
window.fetch.mockResolvedValueOnce({
  json: async () => []
})
```

