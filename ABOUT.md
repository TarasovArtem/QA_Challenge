## Scenario 1: Test strategy - bullet point approach

#### 1. Types of testing which we use for the project
    * Performance testing
    * Regression testing
    * Integration testing (PayPal and other system)
    * Localization testing (Languages)
    * Cross-browser and cross-platform testing

##### Optional types of testing 
    * UX/UI (what is the objective criteria for a good interface)
    * Modular and unit (who writes contract tests, who writes unit tests, and whether we write them at all)
    * Security testing (who guarantees the security of the data, and how the system is resistant to hacking)
    * Failure and recovery (how the system will behave in an emergency)

#### 2. Testing priorities
    * development of autotests (E2E)
    * checking the most critical scenarios (smoke testing)

#### 3. Environments
    It is necessary to think through and agree with the team what environments are required for work, and who will use them. Usually, 2-3 environments and production are enough.

#### 4. Test documentation on the project
    * Test cases
    * Check lists
    * Test scenarios
    

#### 5. Testing tools
    * Frameworks and tools (Cypress, JMeter, Postman, Applitools Eyes)
    * Bug Trackers  (Jira, TestRail)
    * Git tools (SourceTree)



## Scenario 2: E2E UI Automation

#### Tests were automated:
    ● Customer can add any available item to cart 
    ● Customer can update quantity of item in cart 
    ● Customer can remove item from cart 

#### The execution priority should be tests:
    ● Customer can start checkout process
    ● Customer can checkout via PayPal
    For these tests, should be the Customer's data / other credentials

#### Cannot be executed
    ● Customer can jump to item details
    It is not clear what is meant: item details







