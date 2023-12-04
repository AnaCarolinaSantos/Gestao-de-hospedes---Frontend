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
