import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import App from './App';
import { createMemoryHistory } from 'history/cjs/history';

it('Should render correct router', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(getByText('Dragon Ball Manager')).toBeInTheDocument();
  expect(getByText('Address Form')).toBeInTheDocument();
});
