import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormCep from './FormCep';
import { act } from 'react-dom/test-utils';

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: async () => ({
      cep: '01001000',
      bairro: 'Sé',
      logradouro: 'Praça da Sé',
    }),
  })
);

it('should render address form', async () => {
  const { container, getByPlaceholderText } = render(<FormCep />);

  const cepInput = getByPlaceholderText('CEP');
  fireEvent.change(cepInput, { target: { value: '01001000' } });

  await act(() => global.fetch);

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://viacep.com.br/ws/01001000/json/'
  );
  expect(container).toMatchSnapshot();
});
