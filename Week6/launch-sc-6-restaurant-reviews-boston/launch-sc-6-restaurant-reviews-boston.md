Create a Rails application that allows users to view restaurants, and reviews for those restaurants based on their experience.

### Getting Started
To get started, run the following commands. You should see 8 failing feature tests:

```no-highlight
et get launch-sc-6-restaurant-reviews-boston
cd launch-sc-6-restaurant-reviews-boston

yarn install
bundle install

bundle exec rake db:create
bundle exec rspec
```

For this challenge, assume all restaurants and reviews are submitted anonymously (user authentication is **not** required).

### Meeting Expectations Requirements
The necessary `model`, `view` and `controller` (as well as `routes.rb`) files have been created for you. It is up to you to add the necessary code to get the tests to pass. Be sure to generate your own migration files.

Acceptance tests have been written for you to build this restaurant review app. Run the test suite with `bundle exec rspec` and let the test errors guide your development and code implementation. Your first submission should satisfy the following requirements:

* A restaurant must have a name, address, city, state, and zip. It can optionally have a description.
  - _Remember_: zip codes should be strings, not integers! Check out the articles for Database Week or search the internet if you're unsure of why.
* Visiting the `/restaurants` path should contain a list of restaurants.
* Visiting the `/restaurants/new` path should display a form for creating a new restaurant.
* Visiting the `/restaurants/10` path should show the restaurant details for a restaurant with the ID of 10.
* Visiting the root path should display a list of all restaurants.
* When adding a new restaurant, if I fill out the form correctly, I should see the page for the newly created restaurant.
* When adding a new restaurant, if I fill out the form incorrectly and submit the form, I should see the form and be displayed the validation errors.

Once these criteria have been met, add the ability for users to review restaurants. The application must satisfy the following criteria:

* A restaurant can have many reviews. Each review must contain the following:
  - A rating
  - A body
  - A timestamp for when it was created
* Visiting the `/restaurants/10/reviews/new` should display a form for creating a new review for a restaurant with ID = 10. 
* Visiting the `/restaurants/10` path should also include all reviews for a restaurant with ID = 10.
* All acceptance tests passing.

## Tips
- The Rails docs have a wealth of information on the different types of validations! Don't hesitate to Google for the information you don't remember!
- You should be running `rake db:test:prepare` in order to sync any new migrations between your test and development databases. Rails will usually do this for you, but running this command before running your tests is not a bad idea.

### Exceeding Expectations Requirements

Read all of the following user stories first. Once you are done reading, write acceptance tests for these stories and get the tests to pass with your own code.

```no-highlight
As a user
I want to see categories of restaurants (e.g. *thai*, *italian*, *chinese*)
So that I can see the different kinds of foods I could eat
```

Acceptance Criteria
- I should see the name of all categories.
- I should get to this page by clicking on a "Categories" link which is located on the header of every page.

```no-highlight
As a user
I want to see the restaurants belonging to a category
So that I can pick a restaurant for a specific category
```

Acceptance Criteria
- I should see the name of the category at the top of the page.
- I should see the name of all restaurants that belong to this category.
- I should be taken to restaurant's details page if I click on the name of a restaurant while on this page.
- I should get to this page by clicking on the name of a category while on the page with the names of all the categories.

```no-highlight
As a user
I want to see the categories that a restaurant belongs to
So that I know the different kinds of cuisine that the restaurant serves
```

Acceptance Criteria
- On the page for a restaurant's details, I should see all the categories that a restaurant belongs to.
- Clicking on the name of a category should take me to the page with the list of all the restaurants for that particular category.

```no-highlight
As a user
I want to specify what categories a restaurant belongs to when creating it
So people know what kind of cuisine the new restaurant serves
```

Acceptance Criteria
- On the page to create a new restaurant, I should see checkboxes for all the categories.
- Upon successful form submission, I should see the names of the categories which were selected on the form to be present on the restaurant's details page.
