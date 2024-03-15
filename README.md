# Desafio de Front-end da Brainn

## 🎯 Sobre o Desafio

O objetivo deste desafio é construir uma aplicação web front-end que exiba os resultados das loterias. A aplicação deve ser desenvolvida seguindo os requisitos e funcionalidades especificados abaixo.

## 🔍 Recursos

- **Layout:** [Link para o layout no Figma](https://www.figma.com/file/H2qrYBCFMf4didYmxRwTxP/Brainn-Frontend-Challenge) (observação: o layout não está disponível para visualização completa, mas serviu como referência para o design da aplicação)
- **API:** Utilizei a API disponível em [API de Resultados de Loterias](https://apiloterias.com.br/)
- **Tipografia:** Utilizei a fonte Montserrat

## 📋 Requisitos e Funcionalidades

- A aplicação deverá suportar os resultados de 6 sorteios: Mega-sena, Quina, Lotofácil, Lotomania, Timemania e Dia de sorte.
- Os resultados de cada sorteio estarão disponíveis em um menu suspenso (combo-box ou select).
- Ao selecionar um sorteio no menu, a aplicação deverá exibir o tema do sorteio, o número do sorteio, a data do sorteio e os números sorteados correspondentes.
- A aplicação deverá ser responsiva, adaptando-se ao layout especificado para dispositivos móveis.
- O consumo da API poderá ser feito via REST ou GraphQL.
- A utilização do React Router DOM para criar rotas é opcional.

## 🛠️ Tecnologias Utilizadas

- **[Tailwind CSS:](https://tailwindcss.com/)** Utilizei o Tailwind CSSpara estilizar a aplicação.
- **[Next.js:](https://nextjs.org/)** Utilizei o Next.js como framework React para construir a aplicação.
- **[React:](https://react.dev/)** Utilizei React como biblioteca JavaScript para construir a interface de usuário.
- **[TypeScript:](https://www.typescriptlang.org/)** Utilizei TypeScript para adicionar tipagem estática à minha aplicação.

## 💻 Como Implementei o Desafio

Neste desafio, procurei seguir fielmente o layout fornecido, utilizando o Tailwind CSS para estilização. Como a API original não estava mais disponível, optei por utilizar a API disponível em [API de Resultados de Loterias](https://apiloterias.com.br/).

A aplicação consiste em uma única página que exibe os resultados do sorteio selecionado pelo usuário.

## ⚙️ Como Instalar Localmente

1. Clone este repositório para o seu computador.
2. Abra o terminal e navegue até o diretório do projeto.
3. Execute `npm install` para instalar as dependências.
4. Após a instalação, execute `npm run dev` para iniciar o servidor de desenvolvimento.
5. Acesse `http://localhost:3000` no seu navegador para visualizar a aplicação localmente.

## 🌐 Link do Desafio no GitHub

Você pode encontrar o desafio no GitHub [aqui](https://github.com/brainnco-exs/readme-frontend).

## 🖼️ Screenshots

#### Desktop

![Desktop Screenshot](/screenshots/desktop.png)

#### Mobile

![Mobile Screenshot](/screenshots/mobile.png)
