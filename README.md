# Gestão de hóspedes

![Badge de Status](https://img.shields.io/badge/status-Done-green)

Aplicação para gestão de hóspedes em um hotel. Permite a realização de reservas, check-in e checkout.

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Contato](#contato)

## Descrição do Projeto

Explique mais detalhadamente o projeto. Você pode falar sobre a motivação, os objetivos e as principais funcionalidades que deseja implementar. Adicione qualquer informação relevante que ajude o leitor a entender melhor o projeto.

## Funcionalidades

Liste as principais funcionalidades do projeto, por exemplo:

- [x] Autenticação de usuários
- [x] Criação, edição e exclusão de posts
- [x] Upload de imagens
- [x] Sistema de comentários

## Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Linguagem de Programação](https://link_para_documentacao): Exemplo: Python, JavaScript, etc.
- [Framework/Biblioteca](https://link_para_documentacao): Exemplo: Django, React, etc.
- [Banco de Dados](https://link_para_documentacao): Exemplo: PostgreSQL, MongoDB, etc.
- [Ferramenta de Testes](https://link_para_documentacao): Exemplo: PyTest, JUnit, etc.
- [Outras tecnologias](https://link_para_documentacao): Exemplo: Docker, CI/CD, etc.

## Instalação e Configuração

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone este repositório:
    ```bash
    git clone https://github.com/usuario/nome-do-projeto.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd nome-do-projeto
    ```
3. Instale as dependências:
    ```bash
    # Se for um projeto em Python
    pip install -r requirements.txt
    ```
    ```bash
    # Se for um projeto em JavaScript
    npm install
    ```
4. Configure as variáveis de ambiente:

    Crie um arquivo `.env` e configure as variáveis necessárias:
    ```bash
    cp .env.example .env
    ```
    Atualize as variáveis conforme necessário.

5. Execute o projeto:
    ```bash
    # Comando para iniciar o projeto
    ```

## Contato

Se tiver alguma dúvida ou sugestão, entre em contato comigo:

- Nome: Ana Carolina Santos
- Email: ana.c.santos2003@gmail.com
- LinkedIn: [ana-carolina-santos](https://www.linkedin.com/in/ana-carolina-santos-3549a2218/)
- GitHub: [AnaCarolinaSantos](https://github.com/AnaCarolinaSantos)


# Desafio---Full-Stack-Frontend
 Aplicação para gestão de hóspedes em um hotel. Permite a realização de reservas, check-in e checkout.

Vídeo: https://drive.google.com/file/d/1pE6ars5MP23B5fxsWUAndDmLbJMyQ_I0/view?usp=sharing
 

**Requisitos funcionais:**  

Armazenar de forma persiste o cadastro de hóspedes (Informações mínimas:  Nome, documento, telefone); 

Armazenar de forma persistente as reservas geradas; 

Deve ser possível localizar hóspedes por: nome, documento e telefone; 

Localizar hóspedes que ainda estão no hotel; 

Localizar hóspedes que tem reservas, mas ainda não realizaram o check-in.

Permitir ao atendente realizar o check-in; 

Permitir ao atendente realizar o checkout; 


**Regras de negócio:** 

Diárias de segunda à sexta-feira terão um valor fixo de R$ 120,00; 

Diárias em finais de semana terão um valor fixo de R$ 180,00; 

Caso o hóspede tenha carro e necessite utilizar as vagas disponíveis no estabelecimento, será cobrado uma taxa adicional de R$ 15,00 de segunda à  sexta-feira e R$ 20,00 nos finais de semana; 

O horário para a realização do check-in será a partir das 14h00min. Ao tentar realizar o procedimento antes do horário prévio, o sistema deverá emitir um  alerta;

O horário para a realização do checkout será até as 12h00min. Caso o procedimento seja realizado posterior, deverá ser cobrada uma taxa adicional de  50% do valor da diária (Respeitando a variação para dias úteis e finais de  semana);

Durante o processo de checkout, deverá ser exibido em detalhes o total geral da  reserva a ser paga; 


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

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
