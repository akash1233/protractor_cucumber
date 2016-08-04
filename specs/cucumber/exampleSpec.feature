Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  to run my E2E tests

  @dev
  Scenario: Wehkamp site heeft een kinderen-landingspagina
    Given I go to the website with url "http://www.wehkamp.com"
    When I click on button with text "Sluiten"
    When I click on link with text "KINDEREN"
    Then The title of the page is "Kinderen"

  @dev
  Scenario: Wehkamp site heeft een heren-landingspagina
    Given I go to the website with url "http://www.wehkamp.com"
    When I click on link with text "HEREN"
    Then The title of the page is "Heren"



