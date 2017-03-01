# React Native Test  

![travis build passing](https://travis-ci.org/britishgas-engineering/react-test.svg?branch=master)

- Create an epic from master with your name in the branch.
- Complete all work in the epic branch.
- Raise a pull request
- Application must work in both android and ios


```feature
Scenario: application user creates a new list
  Given an application user
  When the application user chooses to create a todo list
  Then the application should create a new todo list

Scenario: application user adds a todo
  Given an application user
  And a new todo
  When the application user chooses to add an item
  Then the application should display an added todo

Scenario: application user completes a todo
  Given an application user
  And a completed todo
  When the application user chooses to complete a todo
  Then the application should show the todo as completed

Scenario: application user un-completes a todo
  Given an application user
  And a completed todo
  When the application user chooses to un-complete a todo
  Then the application user should see the todo as todo

Scenario: application user saves a todo list
  Given an application user
  And a created todo list
  When the user chooses to save their todo list
  Then the application should save their todo list
  And the application user should be informed their list has been saved

Scenario: application user loads a todo list
  Given an application user
  And a saved todo list
  When the users chooses to load a todo list
  Then the application should display the selected todo list
```
