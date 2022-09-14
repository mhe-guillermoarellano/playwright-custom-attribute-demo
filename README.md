# SimpleNg14App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Playwright commands

### Codegen with Angular
First, start the dev server, then run the npm command.

**Steps to generate code**:

- Open two terminals
- Run the command for the dev server in terminal 1: `npm start`
- Run the command for Playwright codegen in terminal 2: `npm run e2e:codegen`
- Navigate to the dev server Url and start recording test steps.

**Steps to funnel generated code to test file**

- Start the dev server in terminal 1: `npm start`
- Create the test spec file. ex: `another-example-test.spec.ts`
  - Note the relative file path to the spec file.
- Run the command for Playwright codegen in terminal 2 with test file name in `--output` params.
  - `npm run e2e:codegen -- --output e2e/src/tests/another-example-test.spec.ts`
- Navigate to the dev server Url and start recording test steps.
- Close the editor to commit the changes to the test spec file.

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
