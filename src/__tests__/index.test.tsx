import { render, screen } from '@testing-library/react'
import Home from '../pages'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

   const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Hello World')

  })
})