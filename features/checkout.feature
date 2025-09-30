Feature: Product checkout on Advantage Online Shopping

  Scenario: Complete purchase as a guest
    Given I am on the home page
    When I click on "Laptops" and select the first product
    And I click "Add to Cart"
    And I go to the cart and proceed to checkout
    And I fill in shipping and payment information
    Then I should see the order confirmation