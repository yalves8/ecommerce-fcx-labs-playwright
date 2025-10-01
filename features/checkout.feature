Feature: Product checkout on Advantage Online Shopping

  Background:
    Given I am on the home page

  @regression @checkout
  Scenario: Complete purchase as a guest
    When I click on "LAPTOPS" and select the first product
    And I click "Add to Cart"
    And I go to the cart and proceed to checkout
    And I register a new user with valid information
    And I fill in shipping and payment information
    Then I should see the order confirmation

    
  @smoke @checkout
  Scenario: Complete purchase creating a account first
    When I create a account at login
    And I click on "LAPTOPS" and select the first product
    And I click "Add to Cart"
    And I go to the cart and proceed to checkout
    And I fill in shipping and payment information
    Then I should see the order confirmation