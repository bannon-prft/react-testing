import { render, screen } from '@testing-library/react'
import Async from './Async'

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    // override built in fetch
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id: 'p1', title: 'First post'}]
    })

    render(<Async />)

    const listeItemElements = await screen.findAllByRole('listitem')
    expect(listeItemElements).not.toHaveLength(0)
  })
})
