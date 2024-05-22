import { render, screen } from '@testing-library/react'
import { SubmitButton } from '@src/components/submit-button';

describe('SubmitButton', () => {
  const name = "Add";

  it('renders a button', () => {
    render(<SubmitButton name={name} />)

    const button = screen.findByText(name);
    expect(button).toBeTruthy();
  })
})
