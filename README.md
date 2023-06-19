# Aplicação React Native para Instrumentação Eletrônica

Este repositório contém o código-fonte de uma aplicação móvel desenvolvida em React Native, como parte do trabalho final do 7º período do curso de Engenharia de Computação, na disciplina de Instrumentação Eletrônica.

## Descrição do Projeto

A aplicação tem como objetivo principal a integração de um sensor de temperatura ESP8266 com um dispositivo móvel, utilizando uma API RESTful. Através da aplicação, é possível ligar e desligar o sensor, além de visualizar os dados de temperatura em um gráfico dinâmico.

A interface da aplicação foi desenvolvida utilizando o framework React Native, permitindo a criação de aplicativos móveis multiplataforma. O gráfico é exibido utilizando a biblioteca react-native-chart-kit, que oferece diversas opções de personalização.

## Funcionalidades

- Botão de ligar/desligar o sensor de temperatura ESP8266.
- Gráfico dinâmico para visualização dos dados de temperatura em tempo real.
- Conexão com a API RESTful para obtenção dos dados do sensor.

## Pré-requisitos

Antes de executar a aplicação, certifique-se de ter as seguintes dependências instaladas em sua máquina:

- Node.js
- npm ou yarn
- SDK do React Native

## Configuração do Ambiente

1. Clone este repositório em sua máquina:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Acesse o diretório do projeto:

```bash
cd nome-do-repositorio
```

3. Instale as dependências:

```bash
npm install
```

ou

```bash
yarn install
```

## Executando a Aplicação

Após a configuração do ambiente, você pode executar a aplicação no emulador ou dispositivo móvel. Certifique-se de ter um emulador em execução ou conecte o dispositivo físico via USB.

1. Inicie o Metro Bundler:

```bash
npx react-native start
```

2. Em outra janela do terminal, execute a aplicação:

Para Android:

```bash
npx react-native run-android
```

Para iOS:

```bash
npx react-native run-ios
```

Aguarde o processo de compilação e instalação da aplicação no dispositivo/emulador.

## Contribuição

Este projeto foi desenvolvido como parte de um trabalho acadêmico. Contribuições adicionais não são esperadas neste momento.



