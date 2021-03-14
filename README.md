### Commands for running tests

#### Installation

1. git clone <https://github.com/TarasovArtem/QA_Challenge.git>

2. cd  `{Project}`

3. install all dependencies: `npm install`


#### Opening Cypress GUI

- `npx cypress open` 
or 
- `npm run cypress:open`


#### Runs all tests in specific browser

- `npm run cypress:run:chrome`

- `npm run cypress:run:firefox`

- `npm run cypress:run:edge`

##### Video report

- `./cypress/videos`

##### Tests

- `./cypress/integration/E2E_Tests/addAnyAvailableItem .spec.ts`

- `./cypress/integration/E2E_Tests/removeItemsFromCart.spec.ts`

- `./cypress/integration/E2E_Tests/updateQuantityOfItemInCart.spec.ts`

