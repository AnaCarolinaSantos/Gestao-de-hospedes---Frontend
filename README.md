# Gestão de hóspedes

![Badge de Status](https://img.shields.io/badge/status-Done-green)

Aplicação para gestão de hóspedes em um hotel. Permite a realização de reservas, check-in e checkout.

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Regras de Negócio](#regras-de-negócio)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Versões](#versões)
- [Comandos utilizados](#comandos-utilizados)
- [Contato](#contato)

## Descrição do Projeto

Este projeto tem como objetivo facilitar a gestão de hóspedes em um hotel, oferecendo uma solução eficiente para controlar reservas, check-ins e checkouts, além de calcular automaticamente os custos das diárias e taxas adicionais. A motivação por trás do desenvolvimento dessa aplicação é a necessidade de otimizar o processo de atendimento e gerenciamento de dados dos hóspedes, garantindo uma experiência mais fluida e ágil tanto para os funcionários quanto para os clientes.

## Funcionalidades

Principais funcionalidades do projeto:

- [x] Armazenar de forma persistente o cadastro de hóspedes (Informações mínimas: Nome, documento, telefone).
- [x] Armazenar de forma persistente as reservas geradas.
- [x] Localizar hóspedes por: nome, documento e telefone.
- [x] Localizar hóspedes que ainda estão no hotel.
- [x] Localizar hóspedes que tem reservas, mas ainda não realizaram o check-in.
- [x] Permitir ao atendente realizar o check-in.
- [x] Permitir ao atendente realizar o checkout.

## Regras de Negócio

Principais regras de negócio do projeto:

- [x] Diárias de segunda à sexta-feira terão um valor fixo de R$ 120,00.
- [x] Diárias em finais de semana terão um valor fixo de R$ 180,00.
- [x] Caso o hóspede tenha carro e necessite utilizar as vagas disponíveis no estabelecimento, será cobrado uma taxa adicional de R$ 15,00 de segunda à sexta-feira e R$ 20,00 nos finais de semana.
- [x] O horário para a realização do check-in será a partir das 14h. Ao tentar realizar o procedimento antes do horário prévio, o sistema deverá emitir um  alerta.
- [x] O horário para a realização do checkout será até as 12h. Caso o procedimento seja realizado posterior, deverá ser cobrada uma taxa adicional de 50% do valor da diária (Respeitando a variação para dias úteis e finais de  semana).
- [x] Durante o processo de checkout, deverá ser exibido em detalhes o total geral da reserva a ser paga.

## Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **Linguagens de Programação:** Java, HTML, CSS, SCSS, TypeScript, etc.
- **Framework/Biblioteca:** Angular, Bootstrap, Material UI, etc.
- **Banco de Dados:** PostgreSQL, etc.
- **Ferramentas:** Remove.bg, etc.
- **Outras tecnologias:** GitHub, Visual Studio Code, IntelliJ IDEA, etc.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Versões 

```
Node.js: v20.10.0
npm: 9.6.7
AngulaCLI: 17.0.5
```

## Comandos utilizados

```
npm install -g @angular/cli
npm install @material/web
npm install --save angular-material
npm install --save @angular/cdk
npm install --save ngx-mask@16.4.1
ng add @angular/material
npm i
```

- Execute `ng serve` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar algum dos arquivos de origem.

- Execute `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

- Execute `ng build` para buildar o projeto. Os artefatos de build serão armazenados no diretório `dist/`.

- Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

- Para obter mais ajuda sobre o Angular CLI, use `ng help` ou confira a página [Angular CLI Overview and Command Reference](https://angular.io/cli).

## Contato

Se tiver alguma dúvida ou sugestão, entre em contato comigo:

- Nome: Ana Carolina Santos
- Email: ana.c.santos2003@gmail.com
- LinkedIn: [ana-carolina-santos](https://www.linkedin.com/in/ana-carolina-santos-3549a2218/)
- GitHub: [AnaCarolinaSantos](https://github.com/AnaCarolinaSantos)
