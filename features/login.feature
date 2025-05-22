Feature: login into facebook

Scenario: Scenario to login into facebook
    Given I am on the login page
    When I enter my username and password I click the login button
  

    


Scenario Outline: Facebook login

   Given a login to Facebook application with "<username>" and "<password>"


   Examples: 
   | username        | password     |
   | ekta@gmail.com  | Iamking@000  |
   

Scenario: child window handle
 Given I entered URL then clickn on child window

    

