import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor, screen , act} from '@testing-library/react';
import TV from './index';


test('renders TV component with videos', async () => {
  render(<TV />);
  await waitFor(() => {
    act(() => {
      expect(screen.getByText('Ep. 1 | Mini Doc. RobôCIn')).toBeInTheDocument();
    });
  });
  await waitFor(() => {
    act(() => {
      expect(screen.getByText('Ep. 2 | Mini Doc. RobôCIn')).toBeInTheDocument();
    });
  });
});














