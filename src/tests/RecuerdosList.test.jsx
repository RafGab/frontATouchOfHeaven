import { render, screen, waitFor } from '@testing-library/react';
import RecuerdosList from '../RecuerdosList';
import axios from 'axios';
import { vi } from 'vitest';
import '@testing-library/jest-dom';

vi.mock('axios');

test('shows a message when there are no recuerdos', async () => {
  axios.get.mockResolvedValue({ data: [] });

  render(<RecuerdosList />);

  await waitFor(() => {
    expect(screen.getByText('No hay recuerdos almacenados.')).toBeInTheDocument();
  });
});
