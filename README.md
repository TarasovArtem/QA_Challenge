### Commands for running tests

#### Installation

 
    git clone https://github.com/TarasovArtem/QA_Challenge.git

    cd  QA_Challenge

    npm install


#### Opening Cypress GUI

    npx cypress open 
    or 
    npm run cypress:open


#### Run all tests in specific browser (***Browsers should be installed on your local machine***)

    npm run cypress:run:chrome

    npm run cypress:run:firefox

    npm run cypress:run:edge

##### Video report

    ./cypress/videos

##### Tests

    ./cypress/integration/E2E_Tests/addAnyAvailableItem.spec.ts

    ./cypress/integration/E2E_Tests/removeItemsFromCart.spec.ts

    ./cypress/integration/E2E_Tests/updateQuantityOfItemInCart.spec.ts

