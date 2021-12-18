## TransactionBase - My Divvy Homework Submission
Using the objectives and instructions as a guide, I have developed a transaction tracking software called TransactionBase. These are the four objectives I accomplished through development.

 - Write a basic user interface that allows users to enter, edit, and remove transactions.
 - Provide a pie chart or histogram of the spend per category.
 - Create a user setting that can convert the displayed numbers to Roman Numerals.
 - Add an i18n setting.

In addition to these objectives, I also produced an assortment of unit tests and made sure to use emotion styling.
 
Here is a collection of screenshots showcasing my application.

![TransactionBase with lots of entries](https://user-images.githubusercontent.com/85265513/146631807-8a64147c-67d8-4736-8ba0-62c40d4d4776.PNG)

The transaction table, populated with several entries.

![Adding a Transaction](https://user-images.githubusercontent.com/85265513/146631816-c0e60e59-6538-4655-8b75-a39e5815ad91.PNG)

Clicking the Add Transaction button will open a modal where a user can create a transaction. Clicking the edit button of a transaction opens a similar modal.

![Deleting a transaction](https://user-images.githubusercontent.com/85265513/146631819-e09b0f7f-5c14-4685-ba51-bb435ba21c84.PNG)

Clicking a transaction's delete button will open this modal, asking the user for confirmation before removing the transaction from the database.

![Spending chart](https://user-images.githubusercontent.com/85265513/146631823-08855e41-2616-4544-8a95-6f87e9e4c8b8.PNG)

This page displays a pie chart showing spending by category. A user can hover over a slice of the pie chart to access a tooltip displaying information about that slice.

![Settings Page Roman Numerals](https://user-images.githubusercontent.com/85265513/146631828-50e02938-ddf2-4250-bafa-d77493610b0c.PNG)

This is the settings page that contains two features. The first feature turns all of the numbers on the site (not including numbers that are part of strings) into Roman Numerals.

![Settings Page i18n](https://user-images.githubusercontent.com/85265513/146631839-4628ccee-ad0d-45d1-9e93-dcecba5de468.PNG)

The second feature turns every string on the site into Japanese, non latin characters. 


---

# Divvy Homework Assignment

This repository provides a starting point for a basic React + GraphQL application.
All of the configuration boilerplate is complete so you can start by writing the code that you want us to see.

Please **fork** this repo a **private repo** on your GitHub account.

Please share your finished project repo with @thawk55 and @jakerichan as part of your submission.

<br />


## Project Setup

This repository is split into a web app directory (eg `/webapp`) and two server directories (eg `/webserver` and `/elixir`).

The `/webserver` one includes a functional GraphQL server in NodeJS with MongoDB backing it.

The `/elixir` one includes a functional GraphQL server in Elixir with Postgresql backing it.

If you are applying for backend, you should use the elixir code.
If you are applying for frontend, feel free to use either.

This project is _intentionally not utilizing 3rd party services or create-react-app_ to give you the opportunity to showcase your talents wherever they are, be it the front end or the back end.

## Instructions

If you are pursuing a full stack or backend position, please include elixir code changes in your homework.

See the [Frontend instructions](webapp/README.md) for frontend focused instructions.  If front end only, use the node server in `/webserver`.

See the [Backend instructions](backend.md) for backend focused instructions.



