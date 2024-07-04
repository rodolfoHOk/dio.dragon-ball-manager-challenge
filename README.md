# Dragon ball manager challenge

## Desafios

Esta é uma aplicação para você poder invocar Shenlong, porém ela tem alguns probleminhas, e além desses probleminhas pra serem resolvidos vocês precisam adicionar testes.

Ja temos o [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) e [Cypress](https://www.cypress.io/) instalados. Todas essas libs são ferramentas de testes

Aqui vão alguns casos para testar porém você pode ir além:

- Testar o filtro no select para exibir todas as esferas, as esferas que eu tenho e as que eu não tenho
- Se eu tiver todas as esferas tenho que conseguir invocar o shenlong
- ... O que mais você desejar! Solte a imaginação!

### Testes implementados

- Testar o filtro no select para exibir todas as esferas, as esferas que eu tenho e as que eu não tenho com React testing library
- Testar o filtro no select para exibir todas as esferas, as esferas que eu tenho e as que eu não tenho com Cypress (e2e test)
- Se eu tiver todas as esferas tenho que conseguir invocar o shenlong com React testing library
- Se eu tiver todas as esferas tenho que conseguir invocar o shenlong com Cypress (e2e test)
- Teste do component FormCep com React testing library
- Teste se o modal de validação da esfera aparece com React testing library
- Se não tiver todas as esferas não devo conseguir invocar o shenlong com React testing library

## Como rodar

Para fazer este repositório funcionar você deve clonar este repositório e ter o Node.js 16 instalado com yarn instalado globalmente

Instalar as dependências e rodar:

```
  yarn
  yarn start
```

Para rodar os testes com testing library

```
  yarn test
```

Para rodar os testes com Cypress

```
  yarn cy:run
```

**HAVE FUN AND CODE!**
