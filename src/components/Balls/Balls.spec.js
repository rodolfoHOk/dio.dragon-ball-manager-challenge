import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Balls from './Balls';

import profileJson from '../../mocks/profile.json';
// import profileSuccess from '../../mocks/profileSuccess.json';
import esferasJson from '../../mocks/esferas.json';
// import esferasSuccess from '../../mocks/esferasSuccess.json';

it('Should open modal to validate', () => {
  const { container, getByText, getAllByText, getByPlaceholderText } = render(
    <Balls balls={esferasJson.balls} profile={profileJson.profile} />
  );

  const iFoundButton = getAllByText('encontrei')[0].closest('button');
  fireEvent.click(iFoundButton);
  expect(getByPlaceholderText('Ex: 23412')).toBeInTheDocument();
  expect(getByText('Validar')).toBeInTheDocument();
  expect(getByText('Voltar')).toBeInTheDocument();

  expect(container).toMatchSnapshot();
});

it('Should render all dragon balls', () => {
  const { container, getAllByText } = render(
    <Balls balls={esferasJson.balls} profile={profileJson.profile} />
  );

  const foundBadges = getAllByText('Encontrada');
  const notFoundBadges = getAllByText('Não encontrada');
  expect(foundBadges.length + notFoundBadges.length).toBe(7);

  expect(container).toMatchSnapshot();
});
