import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Balls from './Balls';

import profileJson from '../../mocks/profile.json';
import esferasJson from '../../mocks/esferas.json';

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

  const backButton = getByText('Voltar').closest('button');
  fireEvent.click(backButton);
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

it('Should show my balls when select me option in filter', () => {
  const { getAllByText, getByTestId, queryByText } = render(
    <Balls balls={esferasJson.balls} profile={profileJson.profile} />
  );

  const filterSelect = getByTestId('filter').closest('select');
  fireEvent.change(filterSelect, { target: { value: 'me' } });

  expect(getAllByText('Encontrada').length).toBe(4);
  expect(queryByText('Não encontrada')).toBeNull();
});

it('Should show not founded balls when select notme option in filter', () => {
  const { getAllByText, getByTestId, queryByText } = render(
    <Balls balls={esferasJson.balls} profile={profileJson.profile} />
  );

  const filterSelect = getByTestId('filter').closest('select');
  fireEvent.change(filterSelect, { target: { value: 'notme' } });

  expect(getAllByText('Não encontrada').length).toBe(3);
  expect(queryByText('Encontrada')).toBeNull();
});
