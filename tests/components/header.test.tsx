import { render, screen } from '@testing-library/react'
import Header from '@src/components/header';

describe('Header', () => {
  it('renders a heading', () => {
    render(<Header />)

    const header = screen.getByText(/Next.js TODO Application/);

    expect(header).toBeTruthy();
  })
})
