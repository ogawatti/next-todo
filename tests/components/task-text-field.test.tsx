import { render, screen } from '@testing-library/react'
import { TaskTextField } from '@src/components/task-text-field';

describe('TaskTextField', () => {
  it('renders a input field', () => {
    render(<TaskTextField id="add-task" />)

    const input = screen.getByTestId('task-text-field');

    expect(input).toBeTruthy();
  })
})
