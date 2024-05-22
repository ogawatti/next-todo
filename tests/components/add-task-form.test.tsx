import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import AddTaskForm from '@src/components/add-task-form';

const create = jest.fn();
const useRouter = jest.fn();
jest.mock('next/navigation', () => ({ useRouter: () => useRouter() }));
jest.mock('../../src/actions/task', () => ({ create: () => create() }));

describe('AddTaskForm', () => {
  const refresh = jest.fn().mockResolvedValue(true);

  beforeEach(() => {
    useRouter.mockReturnValue({ refresh });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders a form', async () => {
    render(<AddTaskForm />)

    const addTaskForm = screen.getByTestId('add-task-form');
    expect(addTaskForm).toBeTruthy();

    const textField = screen.getByTestId('task-text-field');
    expect(textField).toBeTruthy();
    fireEvent.change(textField, 'Test TODO');

    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeTruthy();
    fireEvent.click(submitButton);

    // The server action still does not work in form.
    expect(create).not.toHaveBeenCalled();
    await waitFor(() => {
      expect(refresh).not.toHaveBeenCalled();
    });
  })
})
