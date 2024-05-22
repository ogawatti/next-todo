import { render, screen } from '@testing-library/react'

// Cannot test Async Server Component
import DummyComponent from '../supports/dummy-component';
jest.mock('next/navigation', () => ({ useRouter: () => jest.fn() }));
jest.mock('../../src/actions/task', () => ({ create: jest.fn() }));
jest.mock('../../src/components/tasks', () => (DummyComponent));

import Home from '@src/app/page';

describe('Home', () => {
  it('renders tasks and add-task-form component', async () => {
    render(<Home />);

    const addTaskForm = screen.getByTestId('add-task-form');
    expect(addTaskForm).toBeTruthy();
  })
})
