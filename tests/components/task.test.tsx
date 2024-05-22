import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Task from '@src/components/task';

const done = jest.fn();
const useRouter = jest.fn();
jest.mock('next/navigation', () => ({ useRouter: () => useRouter() }));
jest.mock('../../src/actions/task', () => ({ done: () => done() }));

describe('Task', () => {
  const id = BigInt(1);
  const content = 'Test TODO';
  const refresh = jest.fn().mockResolvedValue(true);

  beforeEach(() => {
    useRouter.mockReturnValue({ refresh });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders a checkbox', async () => {
    render(<Task id={id} content={content} />)

    const task = screen.getByTestId('task');
    expect(task).toBeTruthy();

    const checkbox = screen.getByTestId('task-checkbox');
    expect(checkbox).toBeTruthy();
    fireEvent.click(checkbox);

    expect(done).toHaveBeenCalled();
    await waitFor(() => {
      expect(refresh).toHaveBeenCalled();
    });
  })
})
