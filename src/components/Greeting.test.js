import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

describe('Greeting Component', () => {
  test('renders hello world as a text', () => {
    // Arrange
    render(<Greeting />)

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false })
    expect(helloWorldElement).toBeInTheDocument()
  })

  test('renders good to see you if button NOT clicked', () => {
    render(<Greeting />)
    const paragraphElement = screen.getByText('good to see you', {
      exact: false,
    })
    expect(paragraphElement).toBeInTheDocument()
  })

  test('renders Changed if button WAS clicked', () => {
    // arrange
    render(<Greeting />)

    // act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    // assert
    const paragraphElement = screen.getByText('Changed!')
    expect(paragraphElement).toBeInTheDocument()
  })

  test('does not render good to see you if button is clicked', () => {
    render(<Greeting />)
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    const paragraphElement = screen.queryByText('good to see you', {
      exact: false,
    })
    expect(paragraphElement).toBeNull()
  })
})
