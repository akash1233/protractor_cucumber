Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  to run my E2E tests

  @dev
  Scenario: Wehkamp site has children landing page
    Given I go to the website with url "https://google.com"
    When I search the word "protractor"
    Then click the first search result page

#  @dev
#  Scenario: Wehkamp site has mens landing page
#    Given I go to the website with url "http://www.wehkamp.com"
#    When I click on link with text "HEREN"
#    Then The title of the page is "Herenmode"