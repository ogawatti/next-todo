import { render, screen } from '@testing-library/react'
import { AddTaskFormField } from '@src/components/add-task-form-field';

describe('AddTaskFormField', () => {
  it('renders a label and a text field', () => {
    render(<AddTaskFormField />)

    const label = screen.getByTestId('add-task-form-field-label');
    const textField = screen.getByTestId('add-task-form-text-field');

    expect(label).toBeTruthy();
    expect(textField).toBeTruthy();
  })
})
