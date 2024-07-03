import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Action from './Action';

import profileJson from '../../mocks/profile.json';
import profileSuccess from '../../mocks/profileSuccess.json';

it('Should show modal when try invoke', async () => {
  const { container, getByText } = render(
    <Action balls={profileJson.profile.balls} />
  );

  const button = getByText('Invocar').closest('button');
  fireEvent.click(button);

  expect(
    getByText('Você não tem todas as esferas para invocar o shenlong')
  ).toBeInTheDocument();

  const backButton = getByText('Voltar').closest('button');
  fireEvent.click(backButton);

  expect(getByText('Invocar shenlong')).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it('Should show shenlong when invoke', async () => {
  const { getByText, getByTestId } = render(
    <Action balls={profileSuccess.profile.balls} />
  );

  const button = getByText('Invocar').closest('button');
  fireEvent.click(button);

  expect(getByTestId('shenlong')).toBeInTheDocument();
});
